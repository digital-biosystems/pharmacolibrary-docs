<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;elvitegravir&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Elvitegravir_Barcel2016_reference&quot;,&quot;label&quot;:&quot;Barcel\u00f3_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_elvitegravir/Elvitegravir_Barcel2016_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# elvitegravir

- **generic name:** elvitegravir
- **ATC codes:** `J05AJ02`, `J05AR09`, `J05AR18`, `J05AX11`
- **DrugBank:** [DB09101](https://go.drugbank.com/drugs/DB09101) · **PubChem:** [CID 5277135](https://pubchem.ncbi.nlm.nih.gov/compound/5277135)
- **molar mass:** 447.884 g/mol (C23H23ClFNO5) — DrugBank
- **groups:** approved, investigational

## About

Elvitegravir is an antiviral drug used to treat HIV infections, acting as an integrase inhibitor. It is an approved medicine used in fixed-dose combination antiviral products for HIV treatment, including in the European Union, although one EU product has been withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2740966](https://www.wikidata.org/wiki/Q2740966) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| elvitegravir | parent | 447.884 | C23H23ClFNO5 | DrugBank | [5277135](https://pubchem.ncbi.nlm.nih.gov/compound/5277135) | Barceló_2016 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:58 | 4:28 | 1/0/0 | 2/0/1 | 0/0/0 | 270,855/16,667 | einfracz / qwen3.8-27b | 8 | 2/6 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Barceló_2016_reference](drugs/drug_elvitegravir/Elvitegravir_Barcel2016_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Barceló C et al., Population pharmacokinetic analysis of…, The Journal of antimicrobia… (2016) | [10.1093/jac/dkw050](https://doi.org/10.1093/jac/dkw050) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Seki_2015_VL](drugs/drug_elvitegravir/pd_Seki_2015_VL.md) | Viral load ← elvitegravir · inhibition effect | — | Seki T et al., Effects of raltegravir or elvitegravir…, Antimicrobial agents and ch… (2015) | [10.1128/AAC.04844-14](https://doi.org/10.1128/AAC.04844-14) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Shiroishi-Wakatsuki_2019_HIV_1_replication_infectivity](drugs/drug_elvitegravir/pd_Shiroishi_Wakatsuki_2019_HIV_1_replication_infectivity.md) | HIV-1 replication / infectivity ← elvitegravir · inhibition effect | — | Shiroishi-Wakatsuki T et al., Discovery of 4-oxoquinolines, a new che…, Antiviral research (2019) | [10.1016/j.antiviral.2018.12.012](https://doi.org/10.1016/j.antiviral.2018.12.012) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Vegas_2025_HIV_RNA](drugs/drug_elvitegravir/pd_Vegas_2025_HIV_RNA.md) | HIV-1 RNA ← elvitegravir · disease-progression model | model (no simulator) | Vegas Rodriguez A et al., Integrated Population Pharmacokinetic-p…, The AAPS journal (2025) | [10.1208/s12248-025-01136-4](https://doi.org/10.1208/s12248-025-01136-4) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=elvitegravir) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP3A4` inhibitor/substrate, `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 32 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Barceló_2016.pdf` | Barceló C et al., Population pharmacokinetic analysis of…, The Journal of antimicrobia… (2016) | popPK | 10 | [10.1093/jac/dkw050](https://doi.org/10.1093/jac/dkw050) | [27029846](https://pubmed.ncbi.nlm.nih.gov/27029846) | The abstract explicitly reports quantitative population pharmacokinetic parameters, including clearance (7.6 L/h) and volume of distribution (61 L), for elvitegravir in humans. |
| `Prathipati_2017.pdf` | Prathipati PK et al., Pharmacokinetic and Tissue Distribution…, Pharmaceutical research (2017) | popPK | 8 | [10.1007/s11095-017-2255-7](https://doi.org/10.1007/s11095-017-2255-7) | [28905173](https://pubmed.ncbi.nlm.nih.gov/28905173) | Reports quantitative PK parameters (AUC, half-life) for elvitegravir in mice, but lacks compartmental model parameters like CL or Vd which are required for population-PK extraction. |

<sub>queue written 2026-10-07T12:54:46.088550+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bourgi_2020 | irrelevant | 0 | 0 | The study investigates weight gain in HIV patients and does not report any pharmacokinetic parameters for elvitegravir. |
| popPK | Cottrell_2013 | irrelevant | 0 | 0 | The paper is a review of dolutegravir, where elvitegravir is mentioned only as a comparator agent without specific quantitative PK parameter values provided for elvitegravir. |
| popPK | Hsu_2022 | irrelevant | 0 | 0 | The study is an observational cohort analysis of weight gain, not a pharmacokinetic study, and reports no disposition parameters for elvitegravir. |
| popPK | Isaacs_2020 | irrelevant | 0 | 0 | The study is a computational molecular modelling and docking analysis of HIV-1 integrase binding and does not report pharmacokinetic parameters for elvitegravir. |
| popPK | Li_2022 | irrelevant | 0 | 0 | This is a review of HIV reverse transcriptase inhibitors, and elvitegravir is only mentioned briefly as an integrase inhibitor for context, with no pharmacokinetic parameters reported for it. |
| popPK | OHalloran_2021 | irrelevant | 0 | 0 | The study evaluates cognitive outcomes and neuropsychological scores in HIV-positive women, not pharmacokinetic parameters. |
| popPK | Prathipati_2017 | relevant | 8 | 4 | Reports quantitative PK parameters (AUC, half-life) for elvitegravir in mice, but lacks compartmental model parameters like CL or Vd which are required for population-PK extraction. |
| popPK | Seki_2015 | irrelevant | 0 | 0 | The study is an in vitro virology/resistance study assessing the barrier to resistance for dolutegravir, with no pharmacokinetic parameters for elvitegravir reported. |
| popPK | Shiroishi-Wakatsuki_2019 | irrelevant | 0 | 0 | no_text gate: only 287 chars of text extracted (&lt; 400) |
| popPK | Thurman_2023 | relevant | 5 | 2 | The study reports qualitative PK profiles (concentrations over time) for elvitegravir but does not provide quantitative disposition parameters (CL, V) or a population PK model; specific numeric values are largely in supplementary material or tables not included. |
| popPK | Wu_2024 | irrelevant | 0 | 0 | The paper studies weight gain and CYP2B6 genotypes in HIV patients, not the pharmacokinetic disposition parameters (CL, V, etc.) of elvitegravir. |
| popPK | Zhao_2014 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis of new HIV integrase inhibitors, and elvitegravir is only mentioned as a comparator drug without any pharmacokinetic data. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 12:54 UTC</sub>
