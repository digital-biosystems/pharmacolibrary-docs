<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G04B&quot;,&quot;href&quot;:&quot;atc/G04B.md&quot;},{&quot;label&quot;:&quot;oxybutynin&quot;}]"></div>

# oxybutynin

- **generic name:** oxybutynin
- **ATC codes:** `G04BD04`
- **DrugBank:** [DB01062](https://go.drugbank.com/drugs/DB01062) · **PubChem:** [CID 4634](https://pubchem.ncbi.nlm.nih.gov/compound/4634)
- **molar mass:** 357.4864 g/mol (C22H31NO3) — DrugBank
- **groups:** approved, investigational

## About

Oxybutynin is a bladder medication used to treat urinary incontinence, including urge incontinence and neurogenic bladder problems. It is an approved drug, authorised in the European Union, and is widely used as a urological medicine for urinary frequency and incontinence.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1060922](https://www.wikidata.org/wiki/Q1060922) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:40 | 1:01 | 0/1/0 | 1/0/0 | 0/0/0 | 52,559/2,309 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.333). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Donabella_2015_reference](drugs/drug_oxybutynin/Oxybutynin_Donabella2015_reference.md) | — | 1-compartment (no model) | 0 | Donabella P et al., Development of supported liquid-phase m…, Bioanalysis (2015) | [10.4155/bio.15.7](https://doi.org/10.4155/bio.15.7) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Li_2019_Kv](drugs/drug_oxybutynin/pd_Li_2019_Kv.md) | Kv current ← oxybutynin · direct sigmoid Emax (Hill) effect | — | Li H et al., The anticholinergic drug oxybutynin inh…, Clinical and experimental p… (2019) | [10.1111/1440-1681.13138](https://doi.org/10.1111/1440-1681.13138) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=oxybutynin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` inhibitor, `CYP2D6` inhibitor, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CHRM1 (target), CHRM2 (target), CHRM3 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kretschmar_2021.pdf` | Kretschmar M et al., A Population Pharmacokinetic Model of (…, Journal of clinical pharmac… (2021) | popPK | 10 | [10.1002/jcph.1809](https://doi.org/10.1002/jcph.1809) | [33368382](https://pubmed.ncbi.nlm.nih.gov/33368382) | The paper describes a population PK model for oxybutynin in humans, but the abstract only reports qualitative model structure and bioavailability percentages, lacking the specific numeric parameter estimates (CL, V, Q, etc.) likely located in the full text or tables not provided in the evidence. |
| `Donabella_2015.pdf` | Donabella P et al., Development of supported liquid-phase m…, Bioanalysis (2015) | popPK | 9 | [10.4155/bio.15.7](https://doi.org/10.4155/bio.15.7) | [25871585](https://pubmed.ncbi.nlm.nih.gov/25871585) | The study reports specific quantitative pharmacokinetic parameters (Vd and half-life) for oxybutynin in a two-compartment model. |
| `Li_2004.pdf` | Li L et al., A population pharmacokinetic model with…, Biometrics (2004) | popPK | 5 | [10.1111/j.0006-341X.2004.00190.x](https://doi.org/10.1111/j.0006-341X.2004.00190.x) | [15180671](https://pubmed.ncbi.nlm.nih.gov/15180671) | The paper describes a population PK model methodology for oxybutynin, but the provided evidence contains no quantitative disposition parameter values (e.g., CL, V) or results tables. |

<sub>queue written 2026-10-07T09:39:48.172581+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alberts_1995 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of receptor subtypes and does not report quantitative pharmacokinetic parameters for oxybutynin. |
| popPK | Choppin_1998 | irrelevant | 0 | 0 | The study is a pharmacological characterization of muscarinic receptors using oxybutynin as a tool compound to measure pKB values, not a pharmacokinetic study. |
| popPK | Choppin_2001 | irrelevant | 0 | 0 | The study is a pharmacological receptor characterization (pKB values) in isolated dog tissue, not a pharmacokinetic study, and oxybutynin is used only as a tool compound/antagonist. |
| popPK | Gup_1989 | irrelevant | 0 | 0 | This is an in-vitro receptor binding and contractility study, not a pharmacokinetic study, and oxybutynin is used only as an antagonist probe. |
| popPK | Gupta_1999 | irrelevant | 1 | 0 | The study focuses on dose-efficacy and dose-side effect pharmacodynamic modeling rather than quantitative pharmacokinetic disposition parameters (CL, V, etc.). |
| popPK | Jönsson_2005 | irrelevant | 2 | 0 | The paper uses oxybutynin only as an illustrative example to demonstrate dosing strategy optimization methods, relying on previously published PK/PD models, and does not report original quantitative PK parameters or values for oxybutynin. |
| popPK | Kitta_2023 | irrelevant | 0 | 0 | The study investigates fesoterodine (subject drug) with oxybutynin serving only as an active comparator, and no PK parameters for oxybutynin are reported. |
| popPK | Kretschmar_2021 | relevant | 10 | 2 | The paper describes a population PK model for oxybutynin in humans, but the abstract only reports qualitative model structure and bioavailability percentages, lacking the specific numeric parameter estimates (CL, V, Q, etc.) likely located in the full text or tables not provided in the evidence. |
| popPK | Li_2004 | irrelevant | 5 | 0 | The paper describes a population PK model methodology for oxybutynin, but the provided evidence contains no quantitative disposition parameter values (e.g., CL, V) or results tables. |
| popPK | Li_2019 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiology paper investigating the effect of oxybutynin on potassium channels in rabbit smooth muscle cells, not a pharmacokinetic study. |
| popPK | Matsuo_2000 | irrelevant | 0 | 0 | The study focuses on the receptor binding affinity and pharmacodynamic effects (catalepsy) of oxybutynin in mice, reporting no quantitative pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| popPK | Mizushima_2007 | relevant | 8 | 4 | Study reports PK/PD for oxybutynin in rats, but specific quantitative disposition parameters (CL, V, ka) are in Table 1/Figs not fully detailed in text, only half-life mentions and unbound fractions are present. |
| popPK | Ogungbenro_2010 | irrelevant | 0 | 0 | This is a methodological paper describing sample size calculations for pharmacodynamic models; it does not report original quantitative pharmacokinetic parameters for oxybutynin. |
| popPK | Thor_2008 | irrelevant | 0 | 0 | The study is a mechanistic receptor pharmacology investigation involving mutant M3 receptors in yeast and does not report pharmacokinetic parameters for oxybutynin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 09:39 UTC</sub>
