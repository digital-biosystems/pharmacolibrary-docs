<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;inotuzumab ozogamicin&quot;}]"></div>

# inotuzumab ozogamicin

- **generic name:** inotuzumab ozogamicin
- **ATC codes:** `L01FB01`
- **DrugBank:** [DB05889](https://go.drugbank.com/drugs/DB05889) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Inotuzumab ozogamicin is an antibody-drug conjugate used to treat a form of acute lymphoblastic leukemia/lymphoma. It is authorised in the European Union and carries a boxed warning, so its use is closely monitored.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3799041](https://www.wikidata.org/wiki/Q3799041) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 19:34 | 3:55 | 0/1/1 | 0/0/0 | 0/0/0 | 109,436/18,940 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.778). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q47 — no SI value to build from</sub><br><sub>blocking: C1_half_life_beta failed (ratio 0.2191)</sub><br><sub>route_to: `human_review`</sub> | [Wu_2024_reference](drugs/drug_inotuzumab_ozogamicin/InotuzumabOzogamicin_Wu2024_reference.md) | — | 2-compartment (no model) | 5 (+1 cov.) | Wu JH et al., Population Pharmacokinetics of Inotuzum…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01386-z](https://doi.org/10.1007/s40262-024-01386-z) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.727). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Garrett_2019_reference](drugs/drug_inotuzumab_ozogamicin/InotuzumabOzogamicin_Garrett2019_reference.md) | — | 2-compartment (no model) | 3 | Garrett M et al., Population pharmacokinetics of inotuzum…, Journal of pharmacokinetics… (2019) | [10.1007/s10928-018-9614-9](https://doi.org/10.1007/s10928-018-9614-9) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=inotuzumab_ozogamicin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CD22 (antibody), CD22 (regulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Luu_2016.pdf` | Luu KT et al., A method for optimizing dosage regimens…, Cancer chemotherapy and pha… (2016) | popPK | 9 | [10.1007/s00280-016-3118-3](https://doi.org/10.1007/s00280-016-3118-3) | [27491482](https://pubmed.ncbi.nlm.nih.gov/27491482) | The paper describes a two-compartment PK model for inotuzumab ozogamicin in humans, but the specific numeric parameter values are not present in the provided text. |
| `Betts_2016.pdf` | Betts AM et al., Preclinical to Clinical Translation of…, The AAPS journal (2016) | popPK | 7 | [10.1208/s12248-016-9929-7](https://doi.org/10.1208/s12248-016-9929-7) | [27198897](https://pubmed.ncbi.nlm.nih.gov/27198897) | The paper describes a PK/PD model for inotuzumab ozogamicin but the provided evidence text contains no specific numeric quantitative parameter values (CL, V, etc.) for extraction. |

<sub>queue written 2026-10-14T19:30:59.250389+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Betts_2016 | irrelevant | 7 | 0 | The paper describes a PK/PD model for inotuzumab ozogamicin but the provided evidence text contains no specific numeric quantitative parameter values (CL, V, etc.) for extraction. |
| popPK | Hedrich_2018 | irrelevant | 1 | 0 | The paper is a narrative review of antibody-drug conjugates and does not contain original quantitative pharmacokinetic data or specific parameter values for inotuzumab ozogamicin. |
| popPK | Hibma_2019 | irrelevant | 0 | 0 | The study focuses on a QT-interval concentration-response analysis (cardiotoxicity) and does not report population pharmacokinetic parameters (CL, V, T1/2) or a PK model for inotuzumab ozogamicin. |
| popPK | Kantarjian_2018 | irrelevant | 0 | 0 | The study reports patient-reported outcomes (quality of life) and not pharmacokinetic parameters. |
| popPK | Luu_2016 | relevant | 9 | 1 | The paper describes a two-compartment PK model for inotuzumab ozogamicin in humans, but the specific numeric parameter values are not present in the provided text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 19:31 UTC</sub>
