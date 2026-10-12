<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;cyclobarbital&quot;}]"></div>

# cyclobarbital

- **generic name:** cyclobarbital
- **ATC codes:** `N05CA10`
- **DrugBank:** [DB13737](https://go.drugbank.com/drugs/DB13737) · **PubChem:** not captured
- **molar mass:** 236.271 g/mol (C12H16N2O3) — DrugBank
- **groups:** experimental

## About

Cyclobarbital is a barbiturate once used as a hypnotic and sedative to treat insomnia. It is currently listed only as an experimental drug and is not an approved medicine today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416966](https://www.wikidata.org/wiki/Q416966) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:11 | 2:08 | 0/0/0 | 0/0/0 | 0/0/0 | 14,452/873 | ollama / glm-5.3-flash | 1 | 0/0 | 1/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Breimer_1976.pdf` | Breimer DD et al., Pharmacokinetics and relative bioavaila…, European journal of clinica… (1976) | popPK | 7 | [10.1007/BF00606563](https://doi.org/10.1007/BF00606563) | [989475](https://pubmed.ncbi.nlm.nih.gov/989475) | Human PK study of cyclobarbital with half-life (11.6 h) and bioavailability values in the abstract, but no CL/V or full parameter table in the evidence. |
| `Breyer-Pfaff_1984.pdf` | Breyer-Pfaff U et al., Assessment of drug metabolism in hepati…, European journal of clinica… (1984) | popPK | 7 | [10.1007/BF00546715](https://doi.org/10.1007/BF00546715) | [6143671](https://pubmed.ncbi.nlm.nih.gov/6143671) | Cyclobarbital half-life, clearance and volume of distribution are reported in humans, but only qualitatively in the abstract; numeric values are not present in the evidence. |
| `Watari_1988.pdf` | Watari N et al., Prediction of hepatic first-pass metabo…, Journal of pharmacokinetics… (1988) | popPK | 6 | [10.1007/BF01062138](https://doi.org/10.1007/BF01062138) | [3221327](https://pubmed.ncbi.nlm.nih.gov/3221327) | Cyclobarbital is one of seven barbiturates with kinetic parameters (hepatic clearance, V, ka) modeled in rabbits, but no numeric values for cyclobarbital appear in the evidence. |

<sub>queue written 2026-10-06T20:11:40.280388+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Breyer-Pfaff_1984 | relevant | 7 | 4 | Cyclobarbital half-life, clearance and volume of distribution are reported in humans, but only qualitatively in the abstract; numeric values are not present in the evidence. |
| popPK | Czyzewska-Szafran_1980 | irrelevant | 3 | 0 | Cyclobarbital is one of several hypnotics studied in rats, but no numeric PK parameters for it appear in the evidence; only hexobarbital and barbital PK are mentioned. |
| popPK | Kołaciński_1989 | irrelevant | 3 | 1 | Clinical poisoning study of forced diuresis with no quantitative PK parameters (CL, V, half-life) reported; only qualitative elimination comparisons. |
| PGx | Sakuma_1999 | not_relevant | 2 | 3 | Cyclobarbital is only used as an inducer of CYP1A2 in vitro; no gene variant/genotype effect on cyclobarbital PK/PD parameters is reported. |
| popPK | Watari_1988 | relevant | 6 | 2 | Cyclobarbital is one of seven barbiturates with kinetic parameters (hepatic clearance, V, ka) modeled in rabbits, but no numeric values for cyclobarbital appear in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
