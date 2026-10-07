<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J04A&quot;,&quot;href&quot;:&quot;atc/J04A.md&quot;},{&quot;label&quot;:&quot;rifapentine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rifapentine_Hibma2020_reference&quot;,&quot;label&quot;:&quot;Hibma_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rifapentine/Rifapentine_Hibma2020_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# rifapentine

- **generic name:** rifapentine
- **ATC codes:** `J04AB05`
- **DrugBank:** [DB01201](https://go.drugbank.com/drugs/DB01201) · **PubChem:** [CID 6323497](https://pubchem.ncbi.nlm.nih.gov/compound/6323497)
- **molar mass:** 877.0307 g/mol (C47H64N4O12) — DrugBank
- **groups:** approved, investigational

## About

Rifapentine is an antibiotic used to treat pulmonary tuberculosis. It is an approved medicine and appears on the WHO essential medicines list, though it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3935297](https://www.wikidata.org/wiki/Q3935297) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| rifapentine | parent | 877.031 | C47H64N4O12 | DrugBank | [6323497](https://pubchem.ncbi.nlm.nih.gov/compound/6323497) | Hibma_2020, Liu_2025, Mathad_2022, Savic_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:28 | 3:13 | 1/3/0 | 1/0/3 | 0/0/0 | 186,421/8,587 | einfracz / qwen3.8-27b | 6 | 1/5 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Hibma_2020_reference](drugs/drug_rifapentine/Rifapentine_Hibma2020_reference.md) | ▶ model + simulator | 1-compartment, oral | 7 | Hibma JE et al., Rifapentine Population Pharmacokinetics…, American journal of respira… (2020) | [10.1164/rccm.201912-2489OC](https://doi.org/10.1164/rccm.201912-2489OC) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Liu_2025_reference](drugs/drug_rifapentine/Rifapentine_Liu2025_reference.md) | — | 1-compartment (no model) | 2 | Liu W et al., Pharmacokinetics and safety of rifapent…, The Journal of antimicrobia… (2025) | [10.1093/jac/dkaf029](https://doi.org/10.1093/jac/dkaf029) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Mathad_2022_reference](drugs/drug_rifapentine/Rifapentine_Mathad2022_reference.md) | — | parent + metabolite (no model) | 1 | Mathad JS et al., Pharmacokinetics and Safety of 3 Months…, Clinical infectious disease… (2022) | [10.1093/cid/ciab665](https://doi.org/10.1093/cid/ciab665) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C7 apparent-parameter coherence violated (double correction)</sub><br><sub>route_to: `human_review`</sub> | [Savic_2017_reference](drugs/drug_rifapentine/Rifapentine_Savic2017_reference.md) | — | 1-compartment (no model) | 8 (+2 cov.) | Savic RM et al., Defining the optimal dose of rifapentin…, Clinical pharmacology and t… (2017) | [10.1002/cpt.634](https://doi.org/10.1002/cpt.634) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Liu_2025_TBL](drugs/drug_rifapentine/pd_Liu_2025_TBL.md) | total bilirubin ← rifapentine · indirect response — drug stimulates the production of total bilirubin | — | Liu W et al., Pharmacokinetics and safety of rifapent…, The Journal of antimicrobia… (2025) | [10.1093/jac/dkaf029](https://doi.org/10.1093/jac/dkaf029) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gewitz_2021_TTP](drugs/drug_rifapentine/pd_Gewitz_2021_TTP.md) | time to positivity (TTP) ← rifapentine · direct linear effect | model (no simulator) | Gewitz AD et al., Longitudinal Model-Based Biomarker Anal…, Antimicrobial agents and ch… (2021) | [10.1128/AAC.01794-20](https://doi.org/10.1128/AAC.01794-20) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Radtke_2021_CFU](drugs/drug_rifapentine/pd_Radtke_2021_CFU.md) | lung CFU ← rifapentine · direct Emax (saturable) effect | model (no simulator) | Radtke KK et al., Comparative Efficacy of Rifapentine Alo…, Antimicrobial agents and ch… (2021) | [10.1128/AAC.01705-21](https://doi.org/10.1128/AAC.01705-21) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Savic_2017_TCC](drugs/drug_rifapentine/pd_Savic_2017_TCC.md) | time to stable culture conversion ← rifapentine · time-to-event model | — | Savic RM et al., Defining the optimal dose of rifapentin…, Clinical pharmacology and t… (2017) | [10.1002/cpt.634](https://doi.org/10.1002/cpt.634) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=rifapentine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP2B6` inducer, `CYP2C19` inducer, `CYP2C8` inducer, `CYP2C9` inducer, `CYP3A4` inducer/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 37 matched, 17 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 1  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Liu_2025.pdf` | Liu W et al., Pharmacokinetics and safety of rifapent…, The Journal of antimicrobia… (2025) | popPK | 10 | [10.1093/jac/dkaf029](https://doi.org/10.1093/jac/dkaf029) | [39945044](https://pubmed.ncbi.nlm.nih.gov/39945044) | The abstract reports quantitative population PK findings (one-compartment model, 70.4% clearance increase) and safety data for rifapentine in children. |
| `Pham_2022.pdf` | Pham MM et al., Population Pharmacokinetic Modeling and…, Antimicrobial agents and ch… (2022) | popPK | 10 | [10.1128/aac.02385-21](https://doi.org/10.1128/aac.02385-21) | [35943252](https://pubmed.ncbi.nlm.nih.gov/35943252) | The study reports a population PK model for rifapentine, but the specific numeric parameter estimates (CL, V, Q, etc.) are not listed in the provided abstract text. |
| `Phaisal_2024.pdf` | Phaisal W et al., Genetic and clinical predictors of rifa…, The Journal of antimicrobia… (2024) | popPK | 9 | [10.1093/jac/dkae059](https://doi.org/10.1093/jac/dkae059) | [38661209](https://pubmed.ncbi.nlm.nih.gov/38661209) | The study reports a compartmental PK model for rifapentine with specific numeric values for non-renal clearance (0.681 L·h-1) and qualitative effects on bioavailability and absorption, though the full set of parameters (V, Q, ka) is likely detailed in the full text or tables not fully provided here. |
| `Lee_2023.pdf` | Lee MC et al., Isoniazid level and flu-like symptoms d…, British journal of clinical… (2023) | popPK | 8 | [10.1111/bcp.15527](https://doi.org/10.1111/bcp.15527) | [36100960](https://pubmed.ncbi.nlm.nih.gov/36100960) | The paper describes a population pharmacokinetic study of rifapentine in humans, but the evidence provided (abstract only) does not contain any numeric parameter values (e.g., CL, V, Q, ka). |

<sub>queue written 2026-10-07T12:25:35.088926+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gewitz_2021 | irrelevant | 2 | 1 | The paper is a pharmacodynamic/biomarker study that uses rifapentine AUC as a covariate, but the PK parameters are taken from a previously published study (Ref 2) and are not reported here. |
| popPK | Jin_2025 | irrelevant | 0 | 0 | The study is a systematic review focused on the population pharmacokinetics of bedaquiline, not rifapentine, which is only mentioned as a concomitant medication affecting bedaquiline clearance. |
| popPK | Lee_2023 | relevant | 8 | 0 | The paper describes a population pharmacokinetic study of rifapentine in humans, but the evidence provided (abstract only) does not contain any numeric parameter values (e.g., CL, V, Q, ka). |
| popPK | Mitchison_2012 | irrelevant | 2 | 0 | The paper is a conceptual review discussing PK/PD principles and peak concentrations but provides no original quantitative disposition parameters (CL, V, ka, etc.) for rifapentine. |
| popPK | Mourik_2018 | irrelevant | 0 | 0 | The study reports treatment outcome modeling (cure rates) for rifapentine-based regimens in mice, but does not present quantitative pharmacokinetic disposition parameters (CL, V, etc.) for rifapentine. |
| popPK | Phaisal_2024 | relevant | 9 | 4 | The study reports a compartmental PK model for rifapentine with specific numeric values for non-renal clearance (0.681 L·h-1) and qualitative effects on bioavailability and absorption, though the full set of parameters (V, Q, ka) is likely detailed in the full text or tables not fully provided here. |
| popPK | Pham_2022 | relevant | 10 | 0 | The study reports a population PK model for rifapentine, but the specific numeric parameter estimates (CL, V, Q, etc.) are not listed in the provided abstract text. |
| popPK | Radtke_2021 | irrelevant | 1 | 0 | The study is a PK-PD model focusing on efficacy and exposure-response, but it does not report standard disposition parameters (CL, V, Q, ka) in the provided text, and the numeric values are efficacy metrics (Emax, EC50) rather than PK parameters. |
| popPK | Weld_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters (clearance, trough concentrations) only for dolutegravir, while rifapentine is a co-administered agent without reported PK values. |
| popPK | Xu_2024 | irrelevant | 1 | 0 | The study focuses on pyrazinamide pharmacokinetics and exposure-response, while rifapentine is merely a comparator drug in the regimen without reported quantitative PK parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 12:25 UTC</sub>
