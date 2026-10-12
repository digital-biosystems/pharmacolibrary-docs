<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;calcium levofolinate&quot;}]"></div>

# calcium levofolinate

- **generic name:** calcium levofolinate
- **ATC codes:** `V03AF04`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Calcium levofolinate (levoleucovorin calcium) is a detoxifying agent used to protect against the harmful effects of antineoplastic (cancer chemotherapy) treatment. It is classified in the ATC system under detoxifying agents for antineoplastic treatment, indicating it remains in therapeutic use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q11349901](https://www.wikidata.org/wiki/Q11349901) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:31 | 1:00 | 0/0/0 | 0/0/0 | 0/0/0 | 25,945/907 | ollama / glm-5.3-flash | 3 | 0/3 | 3/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 15 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zittoun_1993.pdf` | Zittoun J et al., Pharmacokinetic comparison of leucovori…, European journal of clinica… (1993) | popPK | 7 | [10.1007/BF02440861](https://doi.org/10.1007/BF02440861) | [8405015](https://pubmed.ncbi.nlm.nih.gov/8405015) | PK study of l-leucovorin (calcium levofolinate) in humans with clearance and volume estimates mentioned, but no numeric values are present in the evidence. |
| `Qiu_2023.pdf` | Qiu B et al., Three-Period Bioequivalence Study of So…, Clinical pharmacology in dr… (2023) | popPK | 6 | [10.1002/cpdd.1223](https://doi.org/10.1002/cpdd.1223) | [36808267](https://pubmed.ncbi.nlm.nih.gov/36808267) | Calcium levofolinate is dosed as a reference in a human bioequivalence study with PK parameters (Cmax, AUC, t½) reported, but the abstract gives no numeric values, which likely reside in tables/figures not provided. |

<sub>queue written 2026-10-07T18:31:39.334757+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bajetta_1995 | irrelevant | 0 | 0 | PK modeling concerns doxifluridine/5-FU; leucovorin is only co-administered, with no quantitative disposition parameters for calcium levofolinate. |
| popPK | Chuang_2012 | irrelevant | 2 | 0 | A narrative review of levoleucovorin efficacy/safety/cost with no quantitative PK parameters (CL, V, half-life) reported in the evidence. |
| popPK | Komatsu_2014 | irrelevant | 0 | 0 | PK parameters are for efatutazone (and SN-38), not calcium levofolinate, which is only a co-administered FOLFIRI component with no disposition parameters reported. |
| popPK | Qiu_2023 | relevant | 6 | 3 | Calcium levofolinate is dosed as a reference in a human bioequivalence study with PK parameters (Cmax, AUC, t½) reported, but the abstract gives no numeric values, which likely reside in tables/figures not provided. |
| popPK | Sunakawa_2022 | irrelevant | 0 | 0 | This is a clinical trial of FOLFOXIRI plus bevacizumab with ctDNA biomarker analysis; levofolinate is only a co-administered regimen component and no PK parameters for it are reported. |
| popPK | Yoshino_2013 | irrelevant | 1 | 0 | Levofolinate is only a co-administered FOLFIRI component; all PK parameters (CL, AUC, t1/2) are for aflibercept, irinotecan, and 5-FU, with no levofolinate disposition data. |
| popPK | Yoshino_2015 | irrelevant | 2 | 1 | Levofolinate is only a co-administered FOLFIRI component; PK reported is for ramucirumab, with no levofolinate disposition parameters in the evidence. |
| popPK | Zampino_1999 | irrelevant | 1 | 0 | Calcium levofolinate (leucovorin) is only a co-administered modulator; PK parameters are reported for doxifluridine and 5-FU, not for levofolinate. |
| popPK | Zittoun_1993 | relevant | 7 | 2 | PK study of l-leucovorin (calcium levofolinate) in humans with clearance and volume estimates mentioned, but no numeric values are present in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
