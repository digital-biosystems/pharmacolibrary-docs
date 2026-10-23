<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;inotuzumab ozogamicin&quot;}]"></div>

# inotuzumab ozogamicin

- **generic name:** inotuzumab ozogamicin
- **ATC codes:** `L01FB01`
- **DrugBank:** [DB05889](https://go.drugbank.com/drugs/DB05889) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Inotuzumab ozogamicin is an antibody-drug conjugate used to treat a form of acute lymphoblastic leukemia/lymphoma. It is authorised in the European Union and carries a boxed warning, so its use is closely monitored.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3799041](https://www.wikidata.org/wiki/Q3799041) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.113 | L/h | 0.113 L/h | patients with relapsed/refractory B-cell ALL or NHL |  | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Garrett_2019_reference](drugs/drug_inotuzumab_ozogamicin/InotuzumabOzogamicin_Garrett2019_reference.md) |
| V | V1 | 6.49 | L | 6.49 L | adult B-cell NHL and BCP-ALL patients and pediatric BCP-ALL patients | 818 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Wu_2024_reference](drugs/drug_inotuzumab_ozogamicin/InotuzumabOzogamicin_Wu2024_reference.md) |
| V | V1 | 6.7 | L | 6.70 L | patients with relapsed/refractory B-cell ALL or NHL |  | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Garrett_2019_reference](drugs/drug_inotuzumab_ozogamicin/InotuzumabOzogamicin_Garrett2019_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="V across studies"><text x="190" y="14" font-size="12" font-weight="600">V (L, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">1</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">10</text><text x="184" y="34.0" font-size="11" text-anchor="end">Wu_2024 · V1</text><circle cx="474.3" cy="30.0" r="4" fill="#ef6c00"><title>Wu_2024 · V1: 6.49 L</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Garrett_2019 · V1</text><circle cx="479.1" cy="46.0" r="4" fill="#ef6c00"><title>Garrett_2019 · V1: 6.7 L</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C1_half_life_beta failed (ratio 0.2622)</sub> | [Garrett_2019_reference](drugs/drug_inotuzumab_ozogamicin/InotuzumabOzogamicin_Garrett2019_reference.md) | — | 2-compartment (no model) | 4 | Garrett M et al., Population pharmacokinetics of inotuzum…, Journal of pharmacokinetics… (2019) | [10.1007/s10928-018-9614-9](https://doi.org/10.1007/s10928-018-9614-9) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub> | [Wu_2024_reference](drugs/drug_inotuzumab_ozogamicin/InotuzumabOzogamicin_Wu2024_reference.md) | — | 2-compartment (no model) | 4 | Wu JH et al., Population Pharmacokinetics of Inotuzum…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01386-z](https://doi.org/10.1007/s40262-024-01386-z) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Betts_2016_tumor_growth_and_inhibition](drugs/drug_inotuzumab_ozogamicin/pd_Betts_2016_tumor_growth_and_inhibition.md) | tumor growth and inhibition ← inotuzumab ozogamicin · disease-progression model | — | Betts AM et al., Preclinical to Clinical Translation of…, The AAPS journal (2016) | [10.1208/s12248-016-9929-7](https://doi.org/10.1208/s12248-016-9929-7) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=inotuzumab_ozogamicin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| distribution | placenta | `ABCB1` substrate | DrugBank actor |
| distribution | testis | `ABCB1` substrate | DrugBank actor |
| excretion | kidney | `ABCB1` substrate | DrugBank actor |
| excretion | liver | `ABCB1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CD22 (antibody), CD22 (regulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:48 | 6:03 | 2/0/0 | 1/0/0 | 0/0/0 | 75,905/37,263 | openai / gpt-6-luna | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Betts_2016.pdf` | Betts AM et al., Preclinical to Clinical Translation of…, The AAPS journal (2016) | popPK | 9 | [10.1208/s12248-016-9929-7](https://doi.org/10.1208/s12248-016-9929-7) | [27198897](https://pubmed.ncbi.nlm.nih.gov/27198897) | The study models inotuzumab ozogamicin disposition, but no numeric PK parameter values are shown in the provided evidence. |
| `Luu_2016.pdf` | Luu KT et al., A method for optimizing dosage regimens…, Cancer chemotherapy and pha… (2016) | popPK | 9 | [10.1007/s00280-016-3118-3](https://doi.org/10.1007/s00280-016-3118-3) | [27491482](https://pubmed.ncbi.nlm.nih.gov/27491482) | A two-compartment InO PK model is reported, but no numeric disposition parameter values are provided. |

<sub>queue written 2026-10-07T12:43:25.562463+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Betts_2016 | relevant | 9 | 0 | The study models inotuzumab ozogamicin disposition, but no numeric PK parameter values are shown in the provided evidence. |
| popPK | Hedrich_2018 | irrelevant | 1 | 0 | This is a review and provides no quantitative inotuzumab ozogamicin disposition parameters. |
| popPK | Hibma_2019 | irrelevant | 2 | 0 | The study models QTc versus inotuzumab ozogamicin concentration but reports no quantitative disposition parameters. |
| popPK | Kantarjian_2018 | irrelevant | 0 | 0 | This human patient-reported outcomes study reports no quantitative pharmacokinetic disposition parameters. |
| popPK | Luu_2016 | relevant | 9 | 1 | A two-compartment InO PK model is reported, but no numeric disposition parameter values are provided. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 12:44 UTC</sub>
