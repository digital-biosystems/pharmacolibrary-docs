<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01A&quot;,&quot;href&quot;:&quot;atc/S01A.md&quot;},{&quot;label&quot;:&quot;micronomicin&quot;}]"></div>

# micronomicin

- **generic name:** micronomicin
- **ATC codes:** `S01AA22`
- **DrugBank:** [DB13274](https://go.drugbank.com/drugs/DB13274) · **PubChem:** not captured
- **molar mass:** 463.576 g/mol (C20H41N5O7) — DrugBank
- **groups:** approved

## About

Micronomicin is an antibiotic related to gentamicin, used to treat eye infections. It is classified as an approved antibiotic for ophthalmological use, though it does not appear to be authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6839784](https://www.wikidata.org/wiki/Q6839784) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| micronomicin | parent | 463.576 | C20H41N5O7 | DrugBank | — | Yamasaku_1983 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:36 | 0:33 | 0/1/0 | 0/0/0 | 0/0/0 | 36,128/1,684 | einfracz / qwen3.8-27b | 2 | 2/0 | 1/1 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Yamasaku_1983_reference](drugs/drug_micronomicin/Micronomicin_Yamasaku1983_reference.md) | — | 1-compartment (no model) | 0 | Yamasaku F, [Pharmacokinetic studies of micronomici…, The Japanese journal of ant… (1983) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Inoue_1983.pdf` | Inoue A et al., [Pharmacokinetic studies on micronomici…, The Japanese journal of ant… (1983) | popPK | 10 | not captured | [6674539](https://pubmed.ncbi.nlm.nih.gov/6674539) | The paper describes a compartmental PK model for micronomicin in dogs, but the specific numeric values for the requested parameters (T1/2, Kel, Vd, Cl) are summarized in text as "not differentiated" without listing the actual numbers, which are likely in tables not provided in the evidence. |
| `Kurimoto_1983.pdf` | Kurimoto T et al., [Pharmacokinetic studies on micronomici…, The Japanese journal of ant… (1983) | popPK | 10 | not captured | [6674538](https://pubmed.ncbi.nlm.nih.gov/6674538) | The study reports pharmacokinetic modeling for micronomicin in rats, but specific numeric parameter values (CL, V, ka) are not listed in the provided abstract text. |
| `Watanabe_1983.pdf` | Watanabe M et al., [Clinical studies of intravenous drip i…, The Japanese journal of ant… (1983) | popPK | 10 | not captured | [6674542](https://pubmed.ncbi.nlm.nih.gov/6674542) | The abstract provides specific quantitative pharmacokinetic parameters (Cmax, T1/2, V1, Kel) for micronomicin derived from a two-compartment model in human volunteers. |
| `Watanabe_1985.pdf` | Watanabe M et al., [Clinical studies of intravenous drip i…, The Japanese journal of ant… (1985) | popPK | 10 | not captured | [4032720](https://pubmed.ncbi.nlm.nih.gov/4032720) | The study reports quantitative PK parameters including Cmax, half-life range, and an elimination constant correlation formula for micronomicin in humans. |
| `Yamasaku_1983.pdf` | Yamasaku F, [Pharmacokinetic studies of micronomici…, The Japanese journal of ant… (1983) | popPK | 10 | not captured | [6674541](https://pubmed.ncbi.nlm.nih.gov/6674541) | The study reports quantitative pharmacokinetic parameters for micronomicin in humans, specifically including half-lives (T1/2 beta 1.43-2.02 hours) and concentration data, although full clearance and volume parameters are not explicitly listed in the provided text. |

<sub>queue written 2026-10-07T18:35:41.408648+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fukuda_2002 | irrelevant | 2 | 0 | Micronomicin is a comparator drug for which AQCmax could not be calculated, and the text explicitly states that its concentration was below the detection limit/quantification limit, so no quantitative PK parameters (CL, V, t1/2) are reported for it. |
| popPK | Fukuda_2002_2 | irrelevant | 2 | 0 | Micronomicin is one of six comparator ophthalmic agents in a rabbit study, and no quantitative PK parameters (CL, V, ka) were calculable or reported for it. |
| popPK | Inoue_1983 | relevant | 10 | 2 | The paper describes a compartmental PK model for micronomicin in dogs, but the specific numeric values for the requested parameters (T1/2, Kel, Vd, Cl) are summarized in text as "not differentiated" without listing the actual numbers, which are likely in tables not provided in the evidence. |
| popPK | Kurimoto_1983 | relevant | 10 | 3 | The study reports pharmacokinetic modeling for micronomicin in rats, but specific numeric parameter values (CL, V, ka) are not listed in the provided abstract text. |
| popPK | Watanabe_1986 | irrelevant | 0 | 0 | The provided evidence contains only software metadata (GROBID) and no scientific content regarding micronomicin or any other drug. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 18:35 UTC</sub>
