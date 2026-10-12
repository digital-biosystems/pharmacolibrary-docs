<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03D&quot;,&quot;href&quot;:&quot;atc/R03D.md&quot;},{&quot;label&quot;:&quot;pranlukast&quot;}]"></div>

# pranlukast

- **generic name:** pranlukast
- **ATC codes:** `R03DC02`
- **DrugBank:** [DB01411](https://go.drugbank.com/drugs/DB01411) · **PubChem:** [CID 4887](https://pubchem.ncbi.nlm.nih.gov/compound/4887)
- **molar mass:** 481.512 g/mol (C27H23N5O4) — DrugBank
- **groups:** investigational

## About

Pranlukast is a leukotriene receptor antagonist developed as an antiasthmatic medicine for obstructive airway disease. It is not authorised in the European Union and is listed as investigational, so its availability appears limited.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7238392](https://www.wikidata.org/wiki/Q7238392) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:09 | 0:42 | 0/2/0 | 1/0/0 | 0/0/0 | 76,472/3,309 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.2). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Asano_2009_reference](drugs/drug_pranlukast/Pranlukast_Asano2009_reference.md) | — | 1-compartment (no model) | 0 | Asano K et al., Impact of pharmacokinetics and pharmaco…, Respirology (Carlton, Vic.) (2009) | [10.1111/j.1440-1843.2009.01552.x](https://doi.org/10.1111/j.1440-1843.2009.01552.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Nakade_2006_reference](drugs/drug_pranlukast/Pranlukast_Nakade2006_reference.md) | — | 1-compartment (no model) | 0 | Nakade S et al., Population pharmacokinetics of pranluka…, Drug metabolism and pharmac… (2006) | [10.2133/dmpk.21.133](https://doi.org/10.2133/dmpk.21.133) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Yang_2021_preS1_binding](drugs/drug_pranlukast/pd_Yang_2021_preS1_binding.md) | HBV preS1 binding biomarker turnover ← pranlukast | — | Yang J et al., A new high-content screening assay of t…, JHEP reports : innovation i… (2021) | [10.1016/j.jhepr.2021.100296](https://doi.org/10.1016/j.jhepr.2021.100296) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Asano_2009.pdf` | Asano K et al., Impact of pharmacokinetics and pharmaco…, Respirology (Carlton, Vic.) (2009) | popPK | 10 | [10.1111/j.1440-1843.2009.01552.x](https://doi.org/10.1111/j.1440-1843.2009.01552.x) | [19703064](https://pubmed.ncbi.nlm.nih.gov/19703064) | The paper reports a population pharmacokinetic analysis of pranlukast in humans, providing explicit values for mean oral clearance (CL/F) and inter-individual variability in the abstract. |
| `Nakade_2006.pdf` | Nakade S et al., Population pharmacokinetics of pranluka…, Drug metabolism and pharmac… (2006) | popPK | 10 | [10.2133/dmpk.21.133](https://doi.org/10.2133/dmpk.21.133) | [16702733](https://pubmed.ncbi.nlm.nih.gov/16702733) | The study is a population PK analysis of pranlukast reporting variability and model structure, but specific mean parameter values (CL, V, etc.) are not explicitly listed in the provided abstract text. |

<sub>queue written 2026-10-07T22:08:46.354393+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Biagioli_2020 | irrelevant | 0 | 0 | The study focuses on the off-target pharmacology of a CysLT1R antagonist (REV5901) and its interaction with GPBAR1, with no pharmacokinetic parameters reported for pranlukast. |
| popPK | Göbel_2019 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study investigating the polypharmacology of pranlukast (sEH and PPARγ modulation), reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Liu_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic investigation of mucus secretion, not a pharmacokinetic study, and reports no disposition parameters (CL, V, ka, etc.) for pranlukast. |
| popPK | Sarau_1999 | irrelevant | 0 | 0 | The paper is a mechanistic study on the molecular cloning and characterization of a receptor, not a pharmacokinetic study of pranlukast. |
| popPK | Yang_2021 | irrelevant | 0 | 0 | This is an in vitro antiviral screening study where pranlukast is used as a reference compound to characterize a cell culture assay, not to measure its pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 22:08 UTC</sub>
