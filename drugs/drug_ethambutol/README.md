<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J04A&quot;,&quot;href&quot;:&quot;atc/J04A.md&quot;},{&quot;label&quot;:&quot;ethambutol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ethambutol_Srivastava2022v2_reference&quot;,&quot;label&quot;:&quot;Srivastava_2022_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ethambutol/Ethambutol_Srivastava2022v2_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ethambutol_Sundell2020_reference&quot;,&quot;label&quot;:&quot;Sundell_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ethambutol/Ethambutol_Sundell2020_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ethambutol_Tikiso2022_reference&quot;,&quot;label&quot;:&quot;Tikiso_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ethambutol/Ethambutol_Tikiso2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# ethambutol

- **generic name:** ethambutol
- **ATC codes:** `J04AK02`, `J04AM03`, `J04AM06`, `J04AM07`
- **DrugBank:** [DB00330](https://go.drugbank.com/drugs/DB00330) · **PubChem:** [CID 14052](https://pubchem.ncbi.nlm.nih.gov/compound/14052)
- **molar mass:** 204.3098 g/mol (C10H24N2O2) — DrugBank
- **groups:** approved, investigational

## About

Ethambutol is an antituberculous drug used to treat tuberculosis, including pulmonary tuberculosis, and Mycobacterium avium-intracellulare infections. It is widely used worldwide and appears on the WHO list of essential medicines, both alone and in fixed-dose combinations with other tuberculosis drugs.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412318](https://www.wikidata.org/wiki/Q412318) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ethambutol | parent | 204.31 | C10H24N2O2 | DrugBank | [14052](https://pubchem.ncbi.nlm.nih.gov/compound/14052) | Sundell_2020 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:50 | 4:40 | 3/1/0 | 1/0/0 | 0/0/0 | 190,998/14,882 | einfracz / qwen3.8-27b | 8 | 0/8 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Srivastava_2022_2_reference](drugs/drug_ethambutol/Ethambutol_Srivastava2022v2_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Srivastava S et al., Rifampin Pharmacokinetics/Pharmacodynam…, Antimicrobial agents and ch… (2022) | [10.1128/aac.02320-21](https://doi.org/10.1128/aac.02320-21) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Sundell_2020_reference](drugs/drug_ethambutol/Ethambutol_Sundell2020_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Sundell J et al., Population Pharmacokinetics and Pharmac…, Antimicrobial agents and ch… (2020) | [10.1128/AAC.01583-19](https://doi.org/10.1128/AAC.01583-19) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Tikiso_2022_reference](drugs/drug_ethambutol/Ethambutol_Tikiso2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Tikiso T et al., Population pharmacokinetics of ethambut…, The Journal of antimicrobia… (2022) | [10.1093/jac/dkac127](https://doi.org/10.1093/jac/dkac127) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Deshpande_2024_reference](drugs/drug_ethambutol/Ethambutol_Deshpande2024_reference.md) | — | 2-compartment (no model) | 3 | Deshpande D et al., Antibacterial action of penicillin agai…, IJTLD open (2024) | [10.5588/ijtldopen.24.0238](https://doi.org/10.5588/ijtldopen.24.0238) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Srivastava_2022_bacterial_burden](drugs/drug_ethambutol/pd_Srivastava_2022_bacterial_burden.md) | bacterial burden ← ethambutol · direct sigmoid Emax (Hill) effect | — | Srivastava S et al., An overview of drugs for the treatment…, Journal of global antimicro… (2022) | [10.1016/j.jgar.2021.12.010](https://doi.org/10.1016/j.jgar.2021.12.010) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ethambutol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2A6` inhibitor, `CYP2C19` inhibitor, `CYP2C9` inhibitor, `CYP2D6` inhibitor, `CYP2E1` inhibitor, `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 79 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 4  ·  extracted 3  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jönsson_2011.pdf` | Jönsson S et al., Population pharmacokinetics of ethambut…, Antimicrobial agents and ch… (2011) | popPK | 10 | [10.1128/AAC.00274-11](https://doi.org/10.1128/AAC.00274-11) | [21690284](https://pubmed.ncbi.nlm.nih.gov/21690284) | The paper reports a population PK model for ethambutol and provides specific typical clearance and bioavailability values in the text, but lacks the full set of numeric parameter estimates (e.g., volume of distribution, half-life, absorption rates, inter-individual variability terms) typically required for comprehensive extraction, which are likely in supplementary tables or figures not included. |
| `Sundell_2020.pdf` | Sundell J et al., Population Pharmacokinetics and Pharmac…, Antimicrobial agents and ch… (2020) | popPK | 10 | [10.1128/AAC.01583-19](https://doi.org/10.1128/AAC.01583-19) | [31712201](https://pubmed.ncbi.nlm.nih.gov/31712201) | The abstract explicitly provides quantitative population pharmacokinetic parameters (clearance 77.4 L/h, volume 76.2 L) for ethambutol in humans. |
| `Zhu_2004.pdf` | Zhu M et al., Pharmacokinetics of ethambutol in child…, The international journal o… (2004) | popPK | 9 | not captured | [15581206](https://pubmed.ncbi.nlm.nih.gov/15581206) | The study describes population PK methods for ethambutol, but the provided text lacks specific numeric parameter values (CL, V, etc.), reporting only qualitative findings like low Cmax. |

<sub>queue written 2026-10-07T12:47:03.180802+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2023 | irrelevant | 0 | 0 | The study focuses on ecotoxicology and wastewater monitoring, reporting toxic effect concentrations (EC50) and environmental risks rather than pharmacokinetic parameters for ethambutol. |
| popPK | Chirehwa_2017 | irrelevant | 0 | 0 | The study focuses on pyrazinamide pharmacokinetics, and while ethambutol was co-administered, no quantitative PK parameters for ethambutol are reported. |
| popPK | Deshpande_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics and efficacy of ceftazidime/avibactam against Mycobacterium avium, with ethambutol serving only as a comparator drug, and no PK parameters for ethambutol are reported. |
| popPK | Deshpande_2024 | irrelevant | 0 | 0 | The study focuses on benzylpenicillin PK/PD against MAC; ethambutol is only mentioned as a comparator from prior studies, and no PK parameters for ethambutol are reported. |
| popPK | Egelund_2011 | irrelevant | 4 | 0 | This is a review article summarizing population PK studies for TB drugs including ethambutol, but no specific quantitative parameter values are provided in the text. |
| popPK | Fors_2020 | irrelevant | 4 | 0 | The paper presents an in-silico PK/PD simulation model for TB therapy where ethambutol is one of four drugs, but it does not report original quantitative pharmacokinetic parameter values (CL, V, etc.) for ethambutol in the provided text (referenced parameters are likely in supplementary materials not included). |
| popPK | Jönsson_2011 | relevant | 10 | 2 | The paper reports a population PK model for ethambutol and provides specific typical clearance and bioavailability values in the text, but lacks the full set of numeric parameter estimates (e.g., volume of distribution, half-life, absorption rates, inter-individual variability terms) typically required for comprehensive extraction, which are likely in supplementary tables or figures not included. |
| popPK | McIlleron_2019 | irrelevant | 2 | 0 | The paper is a review discussing ethambutol's PK generally, but explicitly states that the specific pharmacokinetic model values for ethambutol are presented in supplementary material which is not provided in the evidence. |
| popPK | Srivastava_2018 | irrelevant | 0 | 0 | The study focuses on the antimicrobial efficacy of clofazimine against M. kansasii, with ethambutol only listed as a component of standard therapy without any pharmacokinetic parameter reporting. |
| popPK | Srivastava_2022 | irrelevant | 0 | 0 | The study reports antimicrobial efficacy (MICs and time-kill) for ethambutol, not pharmacokinetic disposition parameters. |
| popPK | Te_2015 | irrelevant | 0 | 0 | Ethambutol is only a co-administered comparator in a study focused on the PK/PD of rifampicin and moxifloxacin, with no ethambutol PK parameters reported. |
| popPK | Zhu_2004 | relevant | 9 | 2 | The study describes population PK methods for ethambutol, but the provided text lacks specific numeric parameter values (CL, V, etc.), reporting only qualitative findings like low Cmax. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 12:47 UTC</sub>
