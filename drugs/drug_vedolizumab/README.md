<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;vedolizumab&quot;}]"></div>

# vedolizumab

- **generic name:** vedolizumab
- **ATC codes:** `L04AG05`
- **DrugBank:** [DB09033](https://go.drugbank.com/drugs/DB09033) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Vedolizumab is a monoclonal antibody immunosuppressant used to treat ulcerative colitis and Crohn's disease. It is authorised in the European Union and is also being investigated for other conditions such as graft-versus-host disease.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7918002](https://www.wikidata.org/wiki/Q7918002) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:06 | 1:50 | 0/4/1 | 0/0/2 | 0/0/0 | 207,129/8,804 | einfracz / qwen3.8-27b | 8 | 1/7 | 8/0 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C1_half_life_beta failed (ratio 0.5504)</sub><br><sub>route_to: `human_review`</sub> | [Rosario_2017_reference](drugs/drug_vedolizumab/Vedolizumab_Rosario2017_reference.md) | — | 1-compartment (no model) | 8 | Rosario M et al., A Review of the Clinical Pharmacokineti…, Clinical pharmacokinetics (2017) | [10.1007/s40262-017-0546-0](https://doi.org/10.1007/s40262-017-0546-0) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Hanzel_2022_reference](drugs/drug_vedolizumab/Vedolizumab_Hanzel2022_reference.md) | — | nonlinear / manual (no model) | 0 | Hanzel J et al., Pharmacokinetic-Pharmacodynamic Model o…, Inflammatory bowel diseases (2022) | [10.1093/ibd/izab143](https://doi.org/10.1093/ibd/izab143) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Okamoto_2021_reference](drugs/drug_vedolizumab/Vedolizumab_Okamoto2021_reference.md) | — | 2-compartment (no model) | 6 (+7 cov.) | Okamoto H et al., Population pharmacokinetics of vedolizu…, Intestinal research (2021) | [10.5217/ir.2019.09167](https://doi.org/10.5217/ir.2019.09167) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Rosario_2015_reference](drugs/drug_vedolizumab/Vedolizumab_Rosario2015_reference.md) | — | 1-compartment (no model) | 0 | Rosario M et al., Population pharmacokinetics-pharmacodyn…, Alimentary pharmacology & t… (2015) | [10.1111/apt.13243](https://doi.org/10.1111/apt.13243) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Waterhouse_2024_reference](drugs/drug_vedolizumab/Vedolizumab_Waterhouse2024_reference.md) | — | 1-compartment (no model) | 1 | Waterhouse T et al., Population pharmacokinetic modeling of…, Pharmacology research & per… (2024) | [10.1002/prp2.1257](https://doi.org/10.1002/prp2.1257) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Hanzel_2022_ENDREM](drugs/drug_vedolizumab/pd_Hanzel_2022_ENDREM.md) | Endoscopic remission (Simple Endoscopic Score for CD &lt; 4) ← vedolizumab · categorical (graded) response model | — | Hanzel J et al., Pharmacokinetic-Pharmacodynamic Model o…, Inflammatory bowel diseases (2022) | [10.1093/ibd/izab143](https://doi.org/10.1093/ibd/izab143) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Vande_2022_Mucosal_healing](drugs/drug_vedolizumab/pd_Vande_2022_Mucosal_healing.md) | Mucosal healing ← vedolizumab · categorical (graded) response model | — | Vande Casteele N et al., Real-world multicentre observational st…, Alimentary pharmacology & t… (2022) | [10.1111/apt.16937](https://doi.org/10.1111/apt.16937) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=vedolizumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ITGA4 (antibody), ITGB7 (antibody).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 29 matched, 16 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 5  ·  extracted 0  ·  needs_review 1  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Colman_2023.pdf` | Colman RJ et al., Real world population pharmacokinetic s…, Alimentary pharmacology & t… (2023) | popPK | 10 | [10.1111/apt.17277](https://doi.org/10.1111/apt.17277) | [36314265](https://pubmed.ncbi.nlm.nih.gov/36314265) | The paper describes a population pharmacokinetic study for vedolizumab in children and identifies a two-compartment model, but specific numeric parameter values (CL, V, Q, etc.) are not provided in the extracted evidence. |
| `Kimura_2026.pdf` | Kimura K et al., Pharmacokinetic and pharmacodynamic mod…, The Journal of pharmacy and… (2026) | popPK | 9 | [10.1093/jpp/rgaf123](https://doi.org/10.1093/jpp/rgaf123) | [41400216](https://pubmed.ncbi.nlm.nih.gov/41400216) | This is a population PK/PD modeling study for vedolizumab, but the specific numeric parameter values (CL, V, etc.) are likely in the full text/tables which are not provided in the evidence block, only the modeling methods and statistical quality metrics. |
| `DHaens_2024.pdf` | D'Haens G et al., Exposure-efficacy relationship of vedol…, Expert review of clinical p… (2024) | popPK | 6 | [10.1080/17512433.2024.2318465](https://doi.org/10.1080/17512433.2024.2318465) | [38441048](https://pubmed.ncbi.nlm.nih.gov/38441048) | The paper discusses a population PK model for vedolizumab and reports exposure metrics (Cav,ss, Ctrough,ss), but specific numeric parameter values (CL, V) are not explicitly stated in the provided evidence, likely residing in the referenced prior model or figures. |

<sub>queue written 2026-10-07T01:05:11.239738+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Colman_2023 | relevant | 10 | 2 | The paper describes a population pharmacokinetic study for vedolizumab in children and identifies a two-compartment model, but specific numeric parameter values (CL, V, Q, etc.) are not provided in the extracted evidence. |
| popPK | DHaens_2024 | relevant | 6 | 2 | The paper discusses a population PK model for vedolizumab and reports exposure metrics (Cav,ss, Ctrough,ss), but specific numeric parameter values (CL, V) are not explicitly stated in the provided evidence, likely residing in the referenced prior model or figures. |
| popPK | Hanzel_2022_2 | irrelevant | 0 | 0 | The paper is a corrigendum correcting a reference citation and contains no original pharmacokinetic data or numeric parameters. |
| popPK | Kimura_2026 | relevant | 9 | 4 | This is a population PK/PD modeling study for vedolizumab, but the specific numeric parameter values (CL, V, etc.) are likely in the full text/tables which are not provided in the evidence block, only the modeling methods and statistical quality metrics. |
| popPK | Roblin_2024 | irrelevant | 0 | 0 | The paper is a review of therapeutic drug monitoring strategies for various biologics in IBD and does not report quantitative pharmacokinetic parameter values (CL, V, etc.) for vedolizumab. |
| popPK | Soler_2009 | irrelevant | 0 | 0 | The paper describes in vitro binding specificity and adhesion assays (EC50/IC50) rather than in vivo pharmacokinetic disposition parameters. |
| popPK | Steenholdt_2025 | irrelevant | 0 | 0 | The study is a retrospective cohort analyzing clinical outcomes and TDM failure mechanisms, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume for vedolizumab. |
| popPK | Vande_2022 | irrelevant | 0 | 0 | The provided text is software metadata and does not contain any pharmacokinetic data for vedolizumab. |
| popPK | unknown_2015 | irrelevant | 2 | 0 | This is a corrigendum for a relevant paper but contains no quantitative PK parameter values (CL, V, etc.) to extract. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 01:05 UTC</sub>
