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

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:11 | 2:08 | 0/0/0 | 0/0/0 | 0/0/0 | 14,452/873 | ollama / glm-5.3-flash | 1 | 0/0 | 1/0 | 0 |

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


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
