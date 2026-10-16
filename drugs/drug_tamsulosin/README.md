<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G04C&quot;,&quot;href&quot;:&quot;atc/G04C.md&quot;},{&quot;label&quot;:&quot;tamsulosin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tamsulosin_Tsuda2010_reference&quot;,&quot;label&quot;:&quot;Tsuda_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tamsulosin/Tamsulosin_Tsuda2010_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# tamsulosin

- **generic name:** tamsulosin
- **ATC codes:** `G04CA02`, `G04CA52`, `G04CA53`, `G04CA54`
- **DrugBank:** [DB00706](https://go.drugbank.com/drugs/DB00706) · **PubChem:** [CID 129211](https://pubchem.ncbi.nlm.nih.gov/compound/129211)
- **molar mass:** 408.512 g/mol (C20H28N2O5S) — DrugBank
- **groups:** approved, investigational

## About

Tamsulosin is an alpha-blocker used to treat prostate problems such as enlarged prostate, prostatitis, and urinary retention. It is an approved medicine and is widely used in urological care, including in combination products.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418480](https://www.wikidata.org/wiki/Q418480) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tamsulosin | parent | 408.512 | C20H28N2O5S | DrugBank | [129211](https://pubchem.ncbi.nlm.nih.gov/compound/129211) | Tsuda_2010 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:18 | 2:03 | 1/1/0 | 0/0/0 | 0/0/0 | 70,385/5,743 | einfracz / qwen3.8-27b | 2 | 1/1 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.182). Primary extraction retained.">cross-check: disputed</span> | [Tsuda_2010_reference](drugs/drug_tamsulosin/Tamsulosin_Tsuda2010_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Tsuda Y et al., Population pharmacokinetics of tamsulos…, British journal of clinical… (2010) | [10.1111/j.1365-2125.2010.03662.x](https://doi.org/10.1111/j.1365-2125.2010.03662.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.333). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Nikolic_2024_reference](drugs/drug_tamsulosin/Tamsulosin_Nikolic2024_reference.md) | — | 1-compartment (no model) | 0 | Nikolic VN et al., Population pharmacokinetics of tamsulos…, World journal of urology (2024) | [10.1007/s00345-024-05115-w](https://doi.org/10.1007/s00345-024-05115-w) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tamsulosin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| distribution | blood | `ORM1` unknown | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA1B (target), ADRA1D (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Nikolic_2024.pdf` | Nikolic VN et al., Population pharmacokinetics of tamsulos…, World journal of urology (2024) | popPK | 10 | [10.1007/s00345-024-05115-w](https://doi.org/10.1007/s00345-024-05115-w) | [39037497](https://pubmed.ncbi.nlm.nih.gov/39037497) | The paper reports a population PK model for tamsulosin in humans with key parameters (CL, V) provided in the abstract, though detailed variability and model-specific values may be in the full text or supplementary material. |

<sub>queue written 2026-10-07T09:17:08.880495+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bauer_2020 | irrelevant | 0 | 0 | The paper is a protocol for a feasibility study of an n-of-1 trial design for symptom tracking; it mentions tamsulosin's half-life only as background context for washout duration and does not report quantitative pharmacokinetic parameter estimates (CL, V, ka, Q) or population PK models. |
| popPK | Chen_1996 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of rat mesenteric microvessels where tamsulosin is used only as a tool compound to identify receptor subtypes, not as the subject of PK analysis. |
| popPK | Chen_1997 | irrelevant | 0 | 0 | This is an in vitro pharmacodynamic study on rat renal arteries using tamsulosin as an adrenoceptor antagonist probe, with no pharmacokinetic parameters reported. |
| popPK | Ding_2023 | irrelevant | 0 | 0 | This is a pharmacological study on isolated human ureter tissue where tamsulosin is used as a tool compound to block alpha-adrenergic receptors, not a pharmacokinetic study reporting disposition parameters for tamsulosin. |
| popPK | Gu_2012 | irrelevant | 0 | 0 | This is a hemodynamic/clinical study assessing the blood pressure effects of mirodenafil in volunteers taking tamsulosin, and it does not report any quantitative pharmacokinetic parameters (e.g., Cmax, AUC, CL, V) for tamsulosin. |
| popPK | Hein_2001 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of receptor binding and signaling (inverse agonism) and does not report any pharmacokinetic parameters for tamsulosin. |
| popPK | Novotna_2014 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study assessing receptor interactions and cytotoxicity, not a pharmacokinetic study reporting disposition parameters for tamsulosin. |
| popPK | Plambeck_2026 | irrelevant | 0 | 0 | The study is a clinical outcome analysis of intraoperative hypotension and vasopressor use, not a pharmacokinetic study. |
| popPK | Takeda_2013 | irrelevant | 0 | 0 | The study evaluates clinical efficacy and safety of add-on treatment, reporting no pharmacokinetic parameters for tamsulosin. |
| popPK | Van_1996 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological analysis of receptor antagonism in rat aorta, not a pharmacokinetic study, and reports no disposition parameters (CL, V, ka, etc.) for tamsulosin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 09:17 UTC</sub>
