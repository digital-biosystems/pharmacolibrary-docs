<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;etrasimod&quot;}]"></div>

# etrasimod

- **generic name:** etrasimod
- **ATC codes:** `L04AE05`
- **DrugBank:** [DB14766](https://go.drugbank.com/drugs/DB14766) · **PubChem:** not captured
- **molar mass:** 457.493 g/mol (C26H26F3NO3) — DrugBank
- **groups:** approved, investigational

## About

Etrasimod is an immunomodulating drug used to treat ulcerative colitis. It is an approved medicine, authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27265630](https://www.wikidata.org/wiki/Q27265630) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 22:07 | 0:24 | 0/0/0 | 0/0/0 | 0/0/0 | 27,387/681 | einfracz / qwen3.8-27b | 3 | 1/2 | 2/1 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=etrasimod).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | heart | `CYP2J2` substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` substrate, `CYP2C8` substrate, `CYP2C9` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP2J2` substrate, `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: S1PR1 (modulator), S1PR3 (modulator), S1PR4 (modulator), S1PR5 (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Shamma_2019 | irrelevant | 1 | 0 | The study focuses on pharmacodynamics (lymphocyte trafficking and receptor binding) and lacks quantitative pharmacokinetic disposition parameters (CL, V, ka). |
| popPK | Eden_2025 | irrelevant | 0 | 0 | The paper is a clinical review of efficacy and safety in IBD and contains no quantitative pharmacokinetic parameters (CL, V, t1/2, etc.) for etrasimod. |
| popPK | Kuriakose_2025 | irrelevant | 0 | 0 | This is a narrative review that discusses ozanimod in detail and etrasimod only briefly, providing only qualitative PK descriptors (half-life range, T_max range, excretion route) without quantitative population PK parameters like clearance, volume, or intercompartmental clearance for etrasimod. |
| popPK | Neri_2024 | irrelevant | 0 | 0 | This is a review of clinical trials for ulcerative colitis focusing on efficacy and safety, with no original pharmacokinetic data or parameters for etrasimod. |
| popPK | Peyrin-Biroulet_2017 | irrelevant | 0 | 0 | The paper is a review of S1P modulators in IBD and does not report any quantitative pharmacokinetic parameters for etrasimod. |
| popPK | Pérez-Jeldres_2019 | irrelevant | 0 | 0 | The paper is a review of JAK inhibitors and S1PR agonists in IBD; while etrasimod is listed, no specific quantitative pharmacokinetic parameters for etrasimod are reported in the text. |
| popPK | Sakurai_2026 | irrelevant | 0 | 0 | The paper is a narrative review comparing small molecule therapies for IBD and does not contain any quantitative pharmacokinetic parameters (CL, V, ka, etc.) for etrasimod. |
| popPK | Vieujean_2024 | irrelevant | 1 | 0 | This is a review article discussing S1P receptor modulators generally and does not present original quantitative PK parameter values for etrasimod. |
| popPK | Zabana_2026 | irrelevant | 1 | 0 | The paper is a narrative review discussing safety and practical management, and while it mentions etrasimod's pharmacokinetics qualitatively, it does not provide quantitative PK parameters (CL, V, ka, etc.) in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
