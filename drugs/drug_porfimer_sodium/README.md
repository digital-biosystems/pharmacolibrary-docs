<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;porfimer sodium&quot;}]"></div>

# porfimer sodium

- **generic name:** porfimer sodium
- **ATC codes:** `L01XD01`
- **DrugBank:** [DB00707](https://go.drugbank.com/drugs/DB00707) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Porfimer sodium is a light-activated sensitiser used in photodynamic therapy, including for precancerous changes of the oesophagus (Barrett's oesophagus) and as an anticancer agent. It is an approved medicine, though the product authorised in the European Union has been withdrawn, so its use is now mainly elsewhere.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7230068](https://www.wikidata.org/wiki/Q7230068) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:48 | 0:53 | 0/1/0 | 0/0/0 | 0/0/0 | 14,338/1,127 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Bellnier_2006_reference](drugs/drug_porfimer_sodium/PorfimerSodium_Bellnier2006_reference.md) | — | general linear (no model) | 0 | Bellnier DA et al., Clinical pharmacokinetics of the PDT ph…, Lasers in surgery and medic… (2006) | [10.1002/lsm.20340](https://doi.org/10.1002/lsm.20340) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bellnier_2006.pdf` | Bellnier DA et al., Clinical pharmacokinetics of the PDT ph…, Lasers in surgery and medic… (2006) | popPK | 10 | [10.1002/lsm.20340](https://doi.org/10.1002/lsm.20340) | [16634075](https://pubmed.ncbi.nlm.nih.gov/16634075) | The paper reports quantitative population pharmacokinetic parameters for porfimer sodium, including specific values for plasma clearance (25.8 ml/hour) and central volume of distribution (3.14 L) for a standard man. |
| `Peng_1991.pdf` | Peng Q et al., Sensitizer for photodynamic therapy of…, International journal of ca… (1991) | popPK | 6 | [10.1002/ijc.2910480218](https://doi.org/10.1002/ijc.2910480218) | [1826901](https://pubmed.ncbi.nlm.nih.gov/1826901) | The study reports pharmacokinetic parameters (half-lives, compartmental model) for Photofrin II (porfimer sodium) in mice, but lacks explicit clearance and volume values. |

<sub>queue written 2026-10-06T22:48:05.417318+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bellnier_2003 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of HPPH, not porfimer_sodium. |
| popPK | Hahn_2006 | irrelevant | 1 | 1 | The study reports tissue concentration levels (ng/mg) from a tissue distribution/toxicity study, not quantitative systemic pharmacokinetic disposition parameters (CL, Vd, Ka, T1/2) or compartmental models. |
| PGx | Liu_2007 | not_relevant | 1 | 10 | The study investigates the effect of the drug imatinib on photosensitizer accumulation (PK), but does not examine the impact of a specific gene variant or genotype on porfimer sodium parameters. |
| popPK | Peng_1991 | relevant | 6 | 4 | The study reports pharmacokinetic parameters (half-lives, compartmental model) for Photofrin II (porfimer sodium) in mice, but lacks explicit clearance and volume values. |
| popPK | Peng_2001 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of 5-aminolevulinic acid (ALA) and its porphyrin metabolites, while Photofrin (porfimer sodium) is used only as a co-administered comparator for efficacy testing without PK parameter reporting. |
| PGx | Usuda_2010 | not_relevant | 3 | 5 | The study links BCRP protein expression (phenotype) to treatment efficacy, but does not report a specific gene variant (genotype) nor quantitative pharmacokinetic parameters (PK) for porfimer sodium. |
| PGx | Xu_2012 | not_relevant | 0 | 0 | The study compares cell lines (GSCs vs U251) and mentions a mechanism (ABCG2) but does not report a specific gene variant's effect on a pharmacokinetic or pharmacodynamic parameter in a pharmacogenomic context. |
| PGx | Xu_2013 | not_relevant | 0 | 0 | The paper investigates the effect of ABCG2 expression (overexpression) on drug efflux and efficacy, but does not report a pharmacogenomic association between specific genetic variants/genotypes and PK/PD parameters. |
| popPK | Yin_2014 | irrelevant | 0 | 0 | The paper describes in vitro photodynamic therapy mechanisms and cytotoxicity (EC50) of Ru(II) complexes, not the pharmacokinetic disposition parameters (CL, V, etc.) of porfimer_sodium. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 22:48 UTC</sub>
