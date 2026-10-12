<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01D&quot;,&quot;href&quot;:&quot;atc/C01D.md&quot;},{&quot;label&quot;:&quot;linsidomine&quot;}]"></div>

# linsidomine

- **generic name:** linsidomine
- **ATC codes:** `C01DX18`
- **DrugBank:** [DB13400](https://go.drugbank.com/drugs/DB13400) · **PubChem:** not captured
- **molar mass:** 170.172 g/mol (C6H10N4O2) — DrugBank
- **groups:** experimental

## About

Linsidomine is a vasodilator and nitric oxide donor that was studied as a cardiac therapy drug for widening blood vessels in heart disease. It remains experimental and is not an established, widely used medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1130256](https://www.wikidata.org/wiki/Q1130256) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 10:45 | 0:42 | 0/0/1 | 0/0/0 | 0/0/0 | 9,982/614 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.429). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q27 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Spreux-Varoquaux_1991_reference](drugs/drug_linsidomine/Linsidomine_SpreuxVaroquaux1991_reference.md) | — | parent + metabolite (no model) | 3 | Spreux-Varoquaux O et al., Pharmacokinetics of molsidomine and its…, British journal of clinical… (1991) | [10.1111/j.1365-2125.1991.tb03919.x](https://doi.org/10.1111/j.1365-2125.1991.tb03919.x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 16 matched, 17 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sennesael_1993.pdf` | Sennesael J et al., Pharmacokinetics of linsidomine (SIN 1)…, International journal of cl… (1993) | popPK | 9 | not captured | [8294165](https://pubmed.ncbi.nlm.nih.gov/8294165) | The study reports pharmacokinetic parameters for linsidomine (SIN 1) and its metabolite (SIN 1C) in humans, including half-lives and renal excretion fractions, but lacks explicit clearance (CL) or volume (V) values in the provided text. |
| `Spreux-Varoquaux_1991_2.pdf` | Spreux-Varoquaux O et al., Pharmacokinetics of molsidomine and of…, Fundamental & clinical phar… (1991) | popPK | 8 | [10.1111/j.1472-8206.1991.tb00741.x](https://doi.org/10.1111/j.1472-8206.1991.tb00741.x) | [1955198](https://pubmed.ncbi.nlm.nih.gov/1955198) | The study reports quantitative PK parameters (half-life, clearance, AUC) for linsidomine (SIN-1) as the active metabolite of molsidomine in humans. |
| `Remadi_2002.pdf` | Remadi JP et al., Effect of linsidomine on the human radi…, Clinical science (London, E… (2002) | pd | 4 | [10.1042/cs1030001](https://doi.org/10.1042/cs1030001) | [12095397](https://www.ncbi.nlm.nih.gov/pubmed/12095397) | metadata signals extractable PD data (EC50) |
| `Segarra_1999.pdf` | Segarra G et al., Comparative effects of dilator drugs on…, Clinical science (London, E… (1999) | pd | 4 | not captured | [9857107](https://www.ncbi.nlm.nih.gov/pubmed/9857107) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-06T10:45:11.643412+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Booth_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vascular relaxation in rat aorta, not a pharmacokinetic study, and reports no disposition parameters for linsidomine. |
| popPK | Foucher-Lavergne_1993 | irrelevant | 2 | 0 | The study focuses on hemodynamics and tolerability, and while it mentions pharmacokinetics in the title, no quantitative PK parameters (CL, V, etc.) are reported in the provided evidence. |
| popPK | Laferrière_2014 | irrelevant | 0 | 0 | The study is a pharmacodynamic/behavioral analysis of topical analgesic combinations in rats, and linsidomine is used as a co-administered NO donor rather than the subject of a pharmacokinetic analysis. |
| PD | Laferrière_2014 | not_relevant | 4 | 2 | The paper reports qualitative dose-dependent effects and dose-response curve shifts for linsidomine in an animal model, but the provided text does not contain specific numeric PD parameters (e.g., ED50, Emax) or data points to derive them. |
| popPK | Lea_1996 | irrelevant | 0 | 0 | The paper is a review of alprostadil, and linsidomine is only mentioned as a comparator agent without any pharmacokinetic data. |
| PD | Lea_1996 | not_relevant | 0 | 0 | The paper is a review of alprostadil and only mentions linsidomine as a comparator agent without providing any pharmacodynamic data, exposure-response analysis, or numeric PD parameters for linsidomine. |
| popPK | Matthiesen_2021 | irrelevant | 0 | 0 | The study is an in-vitro microphysiological model (BBB-on-chip) investigating barrier integrity and antioxidant effects, not a pharmacokinetic study reporting quantitative disposition parameters for linsidomine. |
| PD | Matthiesen_2021 | not_relevant | 2 | 1 | The paper describes a microphysiological model and qualitative observations of barrier disruption by linsidomine, but does not provide numeric concentration-effect data, dose-response curves, or PD parameters. |
| popPK | Remadi_2002 | irrelevant | 0 | 0 | no_text gate: only 48 chars of text extracted (&lt; 400) |
| PD | Remadi_2002 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess the exposure-response relationship. |
| popPK | Rosenkranz_1996 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for molsidomine, not linsidomine. |
| popPK | Segarra_1999 | irrelevant | 0 | 0 | The paper title indicates a study on dilator drugs in penile vasculature, which is unrelated to linsidomine pharmacokinetics. |
| PD | Segarra_1999 | not_relevant | 0 | 0 | The paper studies dilator drugs on penile vessels and does not mention linsidomine or report any exposure-response or dose-response data for it. |
| PGx | Segarra_1999 | not_relevant | 0 | 0 | The paper studies the effects of dilator drugs on penile vasculature and does not mention linsidomine or any pharmacogenomic analysis. |
| popPK | Sennesael_1993 | relevant | 9 | 4 | The study reports pharmacokinetic parameters for linsidomine (SIN 1) and its metabolite (SIN 1C) in humans, including half-lives and renal excretion fractions, but lacks explicit clearance (CL) or volume (V) values in the provided text. |
| popPK | Spreux-Varoquaux_1991 | irrelevant | 0 | 0 | no_text gate: only 104 chars of text extracted (&lt; 400) |
| popPK | Van_1998 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro assay for antioxidants where linsidomine (SIN-1) is used as a reagent/peroxynitrite generator, not as the subject of pharmacokinetic analysis. |
| PD | Van_1998 | not_relevant | 0 | 0 | The paper describes a chemical screening method for antioxidants using linsidomine (SIN-1) as a peroxynitrite generator, not a pharmacodynamic study of linsidomine itself; no exposure-response or dose-response parameters for linsidomine are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 10:45 UTC</sub>
