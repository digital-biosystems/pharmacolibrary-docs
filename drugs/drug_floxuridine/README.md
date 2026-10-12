<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;floxuridine&quot;}]"></div>

# floxuridine

- **generic name:** floxuridine
- **ATC codes:** `L01BC09`
- **DrugBank:** [DB00322](https://go.drugbank.com/drugs/DB00322) · **PubChem:** [CID 5790](https://pubchem.ncbi.nlm.nih.gov/compound/5790)
- **molar mass:** 246.1924 g/mol (C9H11FN2O5) — DrugBank
- **groups:** approved, investigational

## About

Floxuridine is an antimetabolite cancer drug used to treat cancers of the stomach and large intestine. It is an approved anticancer medicine, but it is not authorised in the European Union and carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5462356](https://www.wikidata.org/wiki/Q5462356) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:50 | 2:17 | 0/0/1 | 0/0/0 | 0/0/0 | 36,403/374 | einfracz / qwen3.8-27b | 7 | 0/4 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>STALE — current validate: not captured</sub> | [Port_1999_rats with Morris hepatoma M3924A](drugs/drug_floxuridine/Floxuridine_Port1999_rats_with_morris_hepatoma_m3924a.md) | — | — (no model) | 0 | Port R et al., Local disposition kinetics of floxuridi…, Cancer chemotherapy and pha… (1999) | [10.1007/s002800050946](https://doi.org/10.1007/s002800050946) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 38 matched, 38 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chen_2018.pdf` | Chen M et al., Ultrasound Triggered Conversion of Porp…, ACS nano (2018) | pgx | 7 | [10.1021/acsnano.8b03674](https://doi.org/10.1021/acsnano.8b03674) | [29901986](https://www.ncbi.nlm.nih.gov/pubmed/29901986) | metadata signals extractable PGX data (ABCG2, PK/PD-context) |

<sub>queue written 2026-10-07T16:50:31.137329+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Attilio_1984 | not_relevant | 0 | 0 | The text is a bibliography description for ambulatory infusion therapy and does not contain any pharmacodynamic data, models, or numeric parameters for floxuridine. |
| PGx | Chen_2018 | not_relevant | 0 | 0 | The paper focuses on a drug delivery system and overcoming multidrug resistance via ABCG2 downregulation, reporting no pharmacogenomic effects (gene variants/genotypes) on the PK or PD of floxuridine. |
| PD | Galmarini_2008 | not_relevant | 2 | 1 | The paper reports qualitative cytotoxicity and dose comparisons (e.g., 4x lower dose) but does not provide numeric PD parameters (Emax, EC50) or extractable concentration-effect curves for floxuridine. |
| popPK | Heath_1989 | irrelevant | 0 | 0 | The study is an in-vitro assay regarding liposome delivery of fluorodeoxyuridine, not a pharmacokinetic study of floxuridine. |
| PD | Hu_2015 | not_relevant | 0 | 0 | The paper describes the synthesis and in vitro efficacy of a drug-drug conjugate but does not report any pharmacokinetic data, concentration-effect curves, or numeric PD parameters for floxuridine. |
| PD | Newman_2002 | not_relevant | 0 | 0 | The paper is a clinical trial report on neoadjuvant chemotherapy outcomes and does not contain any pharmacokinetic or pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for floxuridine. |
| PD | ODonnell_2025 | not_relevant | 0 | 0 | The paper is a clinical review of locoregional therapies (radiation, TARE, HAIP, transplant) and does not report any pharmacokinetic or pharmacodynamic modeling, concentration-effect data, or numeric PD parameters for floxuridine. |
| popPK | Owolabi_2024 | irrelevant | 0 | 0 | The paper investigates the antimicrobial activity of plant extracts against Salmonella Typhi and contains no data regarding floxuridine pharmacokinetics. |
| popPK | Port_1999 | relevant | 4 | 6 | The study reports local disposition half-lives and compartment model analyses for floxuridine in rats, but lacks standard systemic PK parameters (CL, V) and represents a non-systemic, local tissue kinetic analysis. |
| PD | Shahraki_2024 | not_relevant | 0 | 0 | The paper investigates in vitro protein binding and fluorescence quenching (molecular interaction), not pharmacodynamic exposure-response or dose-effect relationships in a biological system. |
| PD | Wilkinson_1993 | not_relevant | 2 | 1 | The paper reports clinical dose-response outcomes (response rates at specific dose levels) but lacks pharmacokinetic data or a formal pharmacodynamic model with numeric parameters like Emax or EC50. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 16:50 UTC</sub>
