<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01X&quot;,&quot;href&quot;:&quot;atc/J01X.md&quot;},{&quot;label&quot;:&quot;dalbavancin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dalbavancin_Baiardi2025_reference&quot;,&quot;label&quot;:&quot;Baiardi_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dalbavancin/Dalbavancin_Baiardi2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dalbavancin_Cojutti2023_reference&quot;,&quot;label&quot;:&quot;Cojutti_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dalbavancin/Dalbavancin_Cojutti2023_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# dalbavancin

- **generic name:** dalbavancin
- **ATC codes:** `J01XA04`
- **DrugBank:** [DB06219](https://go.drugbank.com/drugs/DB06219) · **PubChem:** [CID 23724878](https://pubchem.ncbi.nlm.nih.gov/compound/23724878)
- **groups:** approved, investigational

## About

Dalbavancin is a lipoglycopeptide antibiotic used to treat bacterial skin and soft tissue infections such as cellulitis, including infections caused by MRSA. It is approved and authorised in the European Union, where it is used for these infections.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5210237](https://www.wikidata.org/wiki/Q5210237) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| dalbavancin | parent | 1816.71 | C88H100Cl2N10O28 | PubChem | [23724878](https://pubchem.ncbi.nlm.nih.gov/compound/23724878) | Baiardi_2025, Carrothers_2020, Cojutti_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:57 | 2:58 | 2/1/0 | 2/0/0 | 0/0/0 | 230,202/9,492 | einfracz / qwen3.8-27b | 8 | 4/4 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Baiardi_2025_reference](drugs/drug_dalbavancin/Dalbavancin_Baiardi2025_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Baiardi G et al., Multidose Dalbavancin Population Pharma…, Antibiotics (Basel, Switzer… (2025) | [10.3390/antibiotics14020190](https://doi.org/10.3390/antibiotics14020190) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Cojutti_2023_reference](drugs/drug_dalbavancin/Dalbavancin_Cojutti2023_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Cojutti PG et al., Population pharmacokinetics of dalbavan…, Antimicrobial agents and ch… (2023) | [10.1128/AAC.02260-20](https://doi.org/10.1128/AAC.02260-20) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Carrothers_2020_reference](drugs/drug_dalbavancin/Dalbavancin_Carrothers2020_reference.md) | — | 1-compartment (no model) | 2 | Carrothers TJ et al., Dalbavancin Population Pharmacokinetic…, Clinical pharmacology in dr… (2020) | [10.1002/cpdd.695](https://doi.org/10.1002/cpdd.695) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Carrothers_2023_bacterial_kill](drugs/drug_dalbavancin/pd_Carrothers_2023_bacterial_kill.md) | Staphylococcus aureus bacterial kill (Stasis, 1-log kill, 2-log kill) ← dalbavancin · inhibition effect | — | Carrothers TJ et al., Population Pharmacokinetic and Pharmaco…, The Pediatric infectious di… (2023) | [10.1097/INF.0000000000003764](https://doi.org/10.1097/INF.0000000000003764) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span> | [Wang_2021_ACE2_dalbavancin_binding](drugs/drug_dalbavancin/pd_Wang_2021_ACE2_dalbavancin_binding.md) | ACE2-dalbavancin binding ← dalbavancin · target-mediated drug disposition | — | Wang G et al., Dalbavancin binds ACE2 to block its int…, Cell research (2021) | [10.1038/s41422-020-00450-0](https://doi.org/10.1038/s41422-020-00450-0) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dalbavancin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: PNLIP (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 31 matched, 18 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 3  ·  extracted 2  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Buckwalter_2005.pdf` | Buckwalter M et al., Population pharmacokinetic analysis of…, Journal of clinical pharmac… (2005) | popPK | 10 | [10.1177/0091270005280378](https://doi.org/10.1177/0091270005280378) | [16239361](https://pubmed.ncbi.nlm.nih.gov/16239361) | The paper is a population PK study of dalbavancin in humans, but the specific numeric parameter values (CL, V, Q, etc.) are not present in the provided evidence, only qualitative descriptions. |
| `Cojutti_2023.pdf` | Cojutti PG et al., Population pharmacokinetics of dalbavan…, Antimicrobial agents and ch… (2023) | popPK | 10 | [10.1128/AAC.02260-20](https://doi.org/10.1128/AAC.02260-20) | [33649108](https://pubmed.ncbi.nlm.nih.gov/33649108) | The paper explicitly reports a population pharmacokinetic model with numeric values for clearance (0.106 L/h) and steady-state volume of distribution (36.4 L) in the abstract. |
| `Lodise_2026.pdf` | Lodise TP et al., Pharmacokinetics of Dalbavancin in Comp…, JAMA network open (2026) | popPK | 10 | [10.1001/jamanetworkopen.2026.11652](https://doi.org/10.1001/jamanetworkopen.2026.11652) | [41999282](https://pubmed.ncbi.nlm.nih.gov/41999282) | The abstract reports specific numeric population PK parameters (CL, V, covariate exponents) for dalbavancin in humans. |
| `Pai_2026.pdf` | Pai MP et al., Optimizing dalbavancin dosing for compl…, Clinical microbiology and i… (2026) | popPK | 10 | [10.1016/j.cmi.2026.05.049](https://doi.org/10.1016/j.cmi.2026.05.049) | [42264180](https://pubmed.ncbi.nlm.nih.gov/42264180) | The study is a population PK study of dalbavancin in humans reporting relative changes in CL and Vd, but specific numeric parameter estimates (e.g., median CL, V values) are not listed in the abstract text provided. |
| `Dowell_2008.pdf` | Dowell JA et al., Pharmacokinetic-pharmacodynamic modelin…, Journal of clinical pharmac… (2008) | popPK | 9 | [10.1177/0091270008321273](https://doi.org/10.1177/0091270008321273) | [18633123](https://pubmed.ncbi.nlm.nih.gov/18633123) | The study utilizes a population pharmacokinetic model for dalbavancin to perform Monte Carlo simulations, but the specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided abstract text. |

<sub>queue written 2026-10-07T11:55:44.263008+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdul-Mutakabbir_2020 | irrelevant | 1 | 2 | This is an in-vitro PK/PD study using simulated human PK parameters (cited values) to test antibiotic combinations against S. aureus, rather than a study measuring actual PK disposition parameters (CL, V, etc.) in a biological subject. |
| popPK | Benavent_2025 | relevant | 10 | 2 | The paper describes a population PK study of dalbavancin and mentions specific parameter values (CL ~0.036 L/h) in the text, but the comprehensive numeric tables (Table 2, S2, S3) containing full parameter estimates (V, IIV, etc.) are not fully displayed in the provided evidence. |
| popPK | Buckwalter_2005 | relevant | 10 | 0 | The paper is a population PK study of dalbavancin in humans, but the specific numeric parameter values (CL, V, Q, etc.) are not present in the provided evidence, only qualitative descriptions. |
| popPK | Carrothers_2023 | relevant | 10 | 2 | The paper describes a population PK model for dalbavancin with quantitative parameters, but the specific numeric values are located in supplemental material and figures not included in the provided evidence. |
| popPK | Dowell_2008 | relevant | 9 | 2 | The study utilizes a population pharmacokinetic model for dalbavancin to perform Monte Carlo simulations, but the specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided abstract text. |
| popPK | El_2022 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic efficacy assessment using simulated PK, not a pharmacokinetic study measuring disposition parameters. |
| popPK | Gatti_2023 | irrelevant | 4 | 0 | Descriptive case series of clinical outcomes and threshold attainment, without quantitative compartmental PK parameters (CL, V, t1/2) or population model data. |
| popPK | Hervochon_2023 | relevant | 4 | 1 | The study reports observational plasma concentration-time data for dalbavancin but does not explicitly state derived population pharmacokinetic parameters (CL, V) in the provided text or evidence. |
| popPK | Kebriaei_2023 | irrelevant | 2 | 3 | The study is an in-vitro PK/PD simulation using literature-derived PK parameters for dalbavancin rather than measuring disposition in human or animal subjects. |
| popPK | Pai_2026 | relevant | 10 | 3 | The study is a population PK study of dalbavancin in humans reporting relative changes in CL and Vd, but specific numeric parameter estimates (e.g., median CL, V values) are not listed in the abstract text provided. |
| popPK | Wang_2021 | irrelevant | 2 | 0 | The study is an antiviral efficacy investigation in animals, mentioning a half-life range and referencing a figure for concentration data, but it does not report quantitative disposition parameters (CL, V, Q) or a PK model for dalbavancin. |
| popPK | Werth_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics and resistance selection of oritavancin, using dalbavancin only as a historical comparator; no dalbavancin PK parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:56 UTC</sub>
