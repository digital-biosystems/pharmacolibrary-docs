<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Contezolid&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Contezolid_Fu2024_reference&quot;,&quot;label&quot;:&quot;Fu_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_contezolid/Contezolid_Fu2024_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# Contezolid

- **generic name:** Contezolid
- **ATC codes:** not captured
- **DrugBank:** [DB12796](https://go.drugbank.com/drugs/DB12796) · **PubChem:** [CID 25184541](https://pubchem.ncbi.nlm.nih.gov/compound/25184541)
- **molar mass:** 408.337 g/mol (C18H15F3N4O4) — DrugBank
- **groups:** investigational

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| contezolid | parent | 408.337 | C18H15F3N4O4 | DrugBank | [25184541](https://pubchem.ncbi.nlm.nih.gov/compound/25184541) | Bulitta_2024, Wu_2026 |
| MRX-1320 | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-09 10:06 | 5:21 | 1/0/3 | 0/0/1 | 0/0/0 | 296,631/15,152 | einfracz / qwen3.8-27b | 7 | 0/7 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Fu_2024_reference](drugs/drug_contezolid/Contezolid_Fu2024_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Fu G et al., An insight into pharmacokinetics and do…, Frontiers in pharmacology (2024) | [10.3389/fphar.2024.1396994](https://doi.org/10.3389/fphar.2024.1396994) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Bulitta_2024_reference](drugs/drug_contezolid/Contezolid_Bulitta2024_reference.md) | — | general linear (no model) | 2 | Bulitta JB et al., Population pharmacokinetic rationale fo…, Antimicrobial agents and ch… (2024) | [10.1128/aac.01400-23](https://doi.org/10.1128/aac.01400-23) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Liu_2026_reference](drugs/drug_contezolid/Contezolid_Liu2026_reference.md) | — | 1-compartment (no model) | 2 | Liu T et al., Advances in Therapeutic Drug Monitoring…, Clinical interventions in a… (2026) | [10.2147/CIA.S587530](https://doi.org/10.2147/CIA.S587530) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — volume from this paper; review-gap-filled from other p…</sub><br><sub>route_to: `human_review`</sub> | [Wu_2026_reference](drugs/drug_contezolid/Contezolid_Wu2026_reference.md) | — | 1-compartment (no model) | 7 | Wu H et al., Evaluation of the clinical efficacy, sa…, Antimicrobial agents and ch… (2026) | [10.1128/aac.01033-25](https://doi.org/10.1128/aac.01033-25) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Wu_2020_QTcF](drugs/drug_contezolid/pd_Wu_2020_QTcF.md) | ΔQTcF interval ← contezolid · direct linear effect | model (no simulator) | Wu J et al., Evaluation of the Effect of Contezolid…, Antimicrobial agents and ch… (2020) | [10.1128/AAC.02158-19](https://doi.org/10.1128/AAC.02158-19) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 48 matched, 37 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 4  ·  extracted 1  ·  needs_review 3  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bulitta_2024.pdf` | Bulitta JB et al., Population pharmacokinetic rationale fo…, Antimicrobial agents and ch… (2024) | popPK | 10 | [10.1128/aac.01400-23](https://doi.org/10.1128/aac.01400-23) | [38415667](https://pubmed.ncbi.nlm.nih.gov/38415667) | The abstract provides specific population PK parameters, including apparent total clearance values for healthy volunteers and patients. |
| `Li_2020.pdf` | Li L et al., Population Pharmacokinetics Study of Co…, Clinical therapeutics (2020) | popPK | 10 | [10.1016/j.clinthera.2020.03.020](https://doi.org/10.1016/j.clinthera.2020.03.020) | [32389326](https://pubmed.ncbi.nlm.nih.gov/32389326) | The paper describes a population PK model for contezolid in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, likely residing in unprovided tables or supplementary material. |
| `Yuan_2022.pdf` | Yuan H et al., Clinical Pharmacology and Utility of Co…, Antimicrobial agents and ch… (2022) | popPK | 10 | [10.1128/aac.02430-21](https://doi.org/10.1128/aac.02430-21) | [35575579](https://pubmed.ncbi.nlm.nih.gov/35575579) | The paper is a population PK study of contezolid, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract/evidence. |
| `Wu_2019.pdf` | Wu J et al., Tolerability and Pharmacokinetics of Co…, Clinical therapeutics (2019) | popPK | 9 | [10.1016/j.clinthera.2019.04.025](https://doi.org/10.1016/j.clinthera.2019.04.025) | [31126694](https://pubmed.ncbi.nlm.nih.gov/31126694) | The paper reports a Phase I PK study for contezolid with a 2-compartmental model, but the specific numeric parameter values (CL, V, etc.) are not present in the provided text, likely residing in the main tables/figures not included in this abstract. |
| `Yin_2025.pdf` | Yin F et al., Penetration of Contezolid into bone tis…, Journal of global antimicro… (2025) | popPK | 5 | [10.1016/j.jgar.2025.10.019](https://doi.org/10.1016/j.jgar.2025.10.019) | [41167271](https://pubmed.ncbi.nlm.nih.gov/41167271) | Study is a PK study of contezolid but only reports NCA parameters (Cmax, Tmax, AUC ratios) in the abstract; specific clearance/volume/population parameter values are not present in the provided evidence. |
| `Wu_2020.pdf` | Wu J et al., Evaluation of the Effect of Contezolid…, Antimicrobial agents and ch… (2020) | pd | 5 | [10.1128/AAC.02158-19](https://doi.org/10.1128/AAC.02158-19) | [32229495](https://www.ncbi.nlm.nih.gov/pubmed/32229495) | metadata signals extractable PD data (exposure-response) |

<sub>queue written 2026-10-09T10:03:39.125322+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fu_2024 | irrelevant | 0 | 0 | The paper is a review of antimicrobial PK in the elderly and does not mention contezolid or provide data for it. |
| popPK | Li_2020 | relevant | 10 | 0 | The paper describes a population PK model for contezolid in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, likely residing in unprovided tables or supplementary material. |
| popPK | Liu_2026 | irrelevant | 3 | 2 | This is a review paper; while it cites specific PK parameters (CL, Vd) for contezolid from other studies, it does not present original data or a new model, making it less relevant than primary studies, and the values are secondary citations. |
| popPK | Wu_2019 | relevant | 9 | 0 | The paper reports a Phase I PK study for contezolid with a 2-compartmental model, but the specific numeric parameter values (CL, V, etc.) are not present in the provided text, likely residing in the main tables/figures not included in this abstract. |
| popPK | Wu_2020 | irrelevant | 2 | 0 | This is a Thorough QT (TQT) study focused on cardiac safety (QTc prolongation) rather than a pharmacokinetic study reporting quantitative disposition parameters like clearance, volume, or compartmental model parameters. |
| popPK | Yin_2025 | relevant | 5 | 2 | Study is a PK study of contezolid but only reports NCA parameters (Cmax, Tmax, AUC ratios) in the abstract; specific clearance/volume/population parameter values are not present in the provided evidence. |
| popPK | Yuan_2022 | relevant | 10 | 0 | The paper is a population PK study of contezolid, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract/evidence. |
| popPK | Zasheva_2024 | irrelevant | 0 | 0 | The paper is a review of patient access and market authorization timelines for new antibacterial drugs, containing no pharmacokinetic studies or quantitative disposition parameters for contezolid. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The study evaluates hematological safety and efficacy outcomes, not pharmacokinetic disposition parameters for contezolid. |
| popPK | Zhao_2021 | irrelevant | 0 | 0 | The paper is a review of pharmacometrics in antimicrobial development and does not report any specific pharmacokinetic parameters for contezolid. |
| popPK | unknown_2016 | irrelevant | 0 | 0 | no_text gate: only 115 chars of text extracted (&lt; 400) |
| popPK | unknown_2018 | irrelevant | 0 | 0 | no_text gate: only 125 chars of text extracted (&lt; 400) |
| PGx | unknown_2026 | not_relevant | 0 | 0 | The paper is a clinical guideline for off-label anti-tuberculosis drug use; while it mentions NAT2 genotype for isoniazid, it does not report pharmacogenomic effects on the PK or PD parameters of contezolid. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-09 10:03 UTC</sub>
