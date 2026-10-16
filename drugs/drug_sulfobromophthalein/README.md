<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;sulfobromophthalein&quot;}]"></div>

# sulfobromophthalein

- **generic name:** sulfobromophthalein
- **ATC codes:** `V04CE02`
- **DrugBank:** [DB13215](https://go.drugbank.com/drugs/DB13215) · **PubChem:** not captured
- **molar mass:** 794.03 g/mol (C20H10Br4O10S2) — DrugBank
- **groups:** experimental

## About

Sulfobromophthalein is a diagnostic agent used to test liver functional capacity. It is currently regarded as an experimental compound, so it does not appear to be in routine clinical use today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27132840](https://www.wikidata.org/wiki/Q27132840) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:52 | 0:37 | 0/2/0 | 0/0/0 | 0/0/0 | 36,266/1,604 | ollama / glm-5.3-flash | 2 | 2/0 | 1/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Das_1990_reference](drugs/drug_sulfobromophthalein/Sulfobromophthalein_Das1990_reference.md) | — | 1-compartment (no model) | 0 | Das JB et al., Hepatic organic anion transport kinetic…, Proceedings of the Society… (1990) | [10.3181/00379727-195-43147](https://doi.org/10.3181/00379727-195-43147) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Glasinovic_1976_reference](drugs/drug_sulfobromophthalein/Sulfobromophthalein_Glasinovic1976_reference.md) | — | 1-compartment (no model) | 0 | Glasinovic JC et al., The hepatic handling of 131I-labeled su…, Biomedicine / [publiee pour… (1976) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=sulfobromophthalein).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `SLC10A1` inhibitor | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Glasinovic_1976.pdf` | Glasinovic JC et al., The hepatic handling of 131I-labeled su…, Biomedicine / [publiee pour… (1976) | popPK | 8 | not captured | [990386](https://pubmed.ncbi.nlm.nih.gov/990386) | Compartmental analysis of BSP disposition in dogs with some numeric values (extraction fractions) given, though transfer rate constants are only summarized as significant differences. |
| `Biagi_1979.pdf` | Biagi P et al., [Sulfobromophthalein kinetics in normal…, Quaderni Sclavo di diagnost… (1979) | popPK | 7 | not captured | [554996](https://pubmed.ncbi.nlm.nih.gov/554996) | Compartmental PK analysis of sulfobromophthalein in humans, but no numeric parameter values appear in the evidence. |
| `Rodriguez-Garay_2004.pdf` | Rodriguez-Garay EA et al., Reversible cholestasis induced by exper…, Pathophysiology : the offic… (2004) | popPK | 7 | [10.1016/j.pathophys.2003.09.002](https://doi.org/10.1016/j.pathophys.2003.09.002) | [15177510](https://pubmed.ncbi.nlm.nih.gov/15177510) | Compartmental PK analysis of sulfobromophthalein in rats is described, but no numeric parameter values appear in the evidence. |
| `Roma_1994.pdf` | Roma MG et al., Hepatic transport of organic anions in…, Journal of hepatology (1994) | popPK | 6 | [10.1016/s0168-8278(05)80347-2](https://doi.org/10.1016/s0168-8278(05)80347-2) | [8071536](https://pubmed.ncbi.nlm.nih.gov/8071536) | Compartmental analysis of sulfobromophthalein plasma decay in rats is reported, but only percent changes are given in the abstract; actual numeric PK parameter values likely reside in the full text/figures not provided. |
| `Sorrentino_1988.pdf` | Sorrentino D et al., Sex differences in sulfobromophthalein-…, Biochemical pharmacology (1988) | popPK | 6 | [10.1016/0006-2952(88)90309-7](https://doi.org/10.1016/0006-2952(88)90309-7) | [3401243](https://pubmed.ncbi.nlm.nih.gov/3401243) | Perfused rat liver PK of BSP-GSH (sulfobromophthalein metabolite) with clearance, Vmax/Km and two-compartment analysis, but most numeric values (e.g., exact CL, Km, Vmax) are only summarized as percentages in the abstract. |

<sub>queue written 2026-10-07T21:52:13.344634+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Biagi_1979 | relevant | 7 | 1 | Compartmental PK analysis of sulfobromophthalein in humans, but no numeric parameter values appear in the evidence. |
| popPK | Lau_1992 | irrelevant | 0 | 0 | SBP is only used as a GST inhibitor probe in an in vitro rabbit aorta study of glyceryl trinitrate; no PK parameters for SBP are reported. |
| popPK | Namihisa_1981 | irrelevant | 2 | 3 | BSP is only a diagnostic comparator to ICG; only plasma disappearance rates (0.058–0.126) are given, not clearance/volume or a BSP PK model. |
| popPK | Quarfordt_1971 | irrelevant | 0 | 0 | no_text gate: only 112 chars of text extracted (&lt; 400) |
| popPK | Rodriguez-Garay_2004 | relevant | 7 | 2 | Compartmental PK analysis of sulfobromophthalein in rats is described, but no numeric parameter values appear in the evidence. |
| popPK | Roma_1994 | relevant | 6 | 3 | Compartmental analysis of sulfobromophthalein plasma decay in rats is reported, but only percent changes are given in the abstract; actual numeric PK parameter values likely reside in the full text/figures not provided. |
| popPK | Sorrentino_1988 | relevant | 6 | 4 | Perfused rat liver PK of BSP-GSH (sulfobromophthalein metabolite) with clearance, Vmax/Km and two-compartment analysis, but most numeric values (e.g., exact CL, Km, Vmax) are only summarized as percentages in the abstract. |
| popPK | Ueno_2012 | irrelevant | 0 | 0 | This is an in-vitro Caco-2 uptake study of SN-38 (irinotecan metabolite); sulfobromophthalein is only a co-administered transporter probe with no PK parameters for it. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 21:52 UTC</sub>
