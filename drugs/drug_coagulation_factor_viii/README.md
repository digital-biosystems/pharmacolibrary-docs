<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;coagulation factor VIII&quot;}]"></div>

# coagulation factor VIII

- **generic name:** coagulation factor VIII
- **ATC codes:** `B02BD02`
- **DrugBank:** [DB00025](https://go.drugbank.com/drugs/DB00025) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Coagulation factor VIII (antihemophilic factor) is a clotting protein used to treat bleeding disorders such as hemophilia A, von Willebrand's disease, and factor VII deficiency. It is an approved medicine, given as replacement therapy to prevent or control bleeding in patients lacking this factor.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q20801759](https://www.wikidata.org/wiki/Q20801759) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 21:49 | 8:02 | 0/2/2 | 0/0/0 | 0/0/0 | 298,209/52,283 | einfracz / qwen3.8-27b | 5 | 1/4 | 4/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.4), gpt-oss:120b (primary re-run, agreement 0.4). Primary extraction retained.">cross-check: partial 0/2</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Blanchette_2021_reference](drugs/drug_coagulation_factor_viii/CoagulationFactorViii_Blanchette2021_reference.md) | — | 1-compartment (no model) | 2 | Blanchette VS et al., A Practical, One-Clinic Visit Protocol…, Thrombosis and haemostasis (2021) | [10.1055/a-1376-0970](https://doi.org/10.1055/a-1376-0970) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.769). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Delavenne_2020_reference](drugs/drug_coagulation_factor_viii/CoagulationFactorViii_Delavenne2020_reference.md) | — | 1-compartment (no model) | 2 | Delavenne X et al., A new paradigm for personalized prophyl…, Haemophilia : the official… (2020) | [10.1111/hae.13935](https://doi.org/10.1111/hae.13935) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Hua_2019_reference](drugs/drug_coagulation_factor_viii/CoagulationFactorViii_Hua2019_reference.md) | — | 1-compartment (no model) | 0 | Hua BL et al., [Population pharmacokinetics of two rec…, Zhonghua xue ye xue za zhi… (2019) | [10.3760/cma.j.issn.0253-2727.2019.08.009](https://doi.org/10.3760/cma.j.issn.0253-2727.2019.08.009) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333), gpt-oss:120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Preijers_2018_reference](drugs/drug_coagulation_factor_viii/CoagulationFactorViii_Preijers2018_reference.md) | — | 1-compartment (no model) | 0 | Preijers T et al., Cross-evaluation of Pharmacokinetic-Gui…, Thrombosis and haemostasis (2018) | [10.1055/s-0038-1623531](https://doi.org/10.1055/s-0038-1623531) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=coagulation_factor_viii).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ASGR2 (binder), CALR (chaperone), CANX (chaperone), F10 (activator), F2 (activator), F9 (cofactor), HSPA5 (chaperone), LMAN1 (binder), LMAN1 (transporter), LRP1 (modulator), MCFD2 (modulator), PHYH (target), PROC (substrate), VWF (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 32 matched, 12 returned
- **screened:** 6  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs_review 2  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhang_2017.pdf` | Zhang Y et al., Population pharmacokinetics of recombin…, Journal of thrombosis and h… (2017) | popPK | 10 | [10.1111/jth.13662](https://doi.org/10.1111/jth.13662) | [28244200](https://pubmed.ncbi.nlm.nih.gov/28244200) | The paper describes a population PK study for coagulation_factor_viii, but the specific numeric parameter values are not present in the provided evidence text. |
| `Di_2007.pdf` | Di Paola J et al., ReFacto and Advate: a single-dose, rand…, Haemophilia : the official… (2007) | popPK | 9 | [10.1111/j.1365-2516.2006.01420.x](https://doi.org/10.1111/j.1365-2516.2006.01420.x) | [17286764](https://pubmed.ncbi.nlm.nih.gov/17286764) | The study is a quantitative PK study of Factor VIII in humans, but the specific numeric parameter values (CL, V, AUC, etc.) are not present in the provided text, which only summarizes the bioequivalence result. |
| `Preijers_2018.pdf` | Preijers T et al., Cross-evaluation of Pharmacokinetic-Gui…, Thrombosis and haemostasis (2018) | popPK | 9 | [10.1055/s-0038-1623531](https://doi.org/10.1055/s-0038-1623531) | [29534249](https://pubmed.ncbi.nlm.nih.gov/29534249) | The paper is a PK study of Factor VIII in humans reporting quantitative disposition parameters like half-life for individual patients, though full population PK model parameters (CL, Vd) are not explicitly listed. |
| `Bauer_2023.pdf` | Bauer A et al., Pharmacokinetic-Pharmacodynamic Compari…, Journal of blood medicine (2023) | popPK | 8 | [10.2147/JBM.S395845](https://doi.org/10.2147/JBM.S395845) | [37332615](https://pubmed.ncbi.nlm.nih.gov/37332615) | The paper reports population PK/PD parameters for coagulation_factor_viii (as part of VWF/FVIII complexes) in humans, but specific numeric values are described qualitatively or in missing figures/supplementary material. |
| `Jiménez-Yuste_2015.pdf` | Jiménez-Yuste V et al., The pharmacokinetics of a B-domain trun…, Journal of thrombosis and h… (2015) | popPK | 8 | [10.1111/jth.12816](https://doi.org/10.1111/jth.12816) | [25495795](https://pubmed.ncbi.nlm.nih.gov/25495795) | The paper describes a population PK study for turoctocog alfa (FVIII), but the extracted evidence contains only a narrative summary without specific numeric values for clearance, volume, or half-life. |

<sub>queue written 2026-10-14T21:42:11.375087+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bauer_2023 | relevant | 8 | 2 | The paper reports population PK/PD parameters for coagulation_factor_viii (as part of VWF/FVIII complexes) in humans, but specific numeric values are described qualitatively or in missing figures/supplementary material. |
| popPK | Di_2007 | relevant | 9 | 2 | The study is a quantitative PK study of Factor VIII in humans, but the specific numeric parameter values (CL, V, AUC, etc.) are not present in the provided text, which only summarizes the bioequivalence result. |
| popPK | Jiménez-Yuste_2015 | relevant | 8 | 0 | The paper describes a population PK study for turoctocog alfa (FVIII), but the extracted evidence contains only a narrative summary without specific numeric values for clearance, volume, or half-life. |
| popPK | Kim_2024 | irrelevant | 2 | 2 | The paper describes a PK/PD model for the novel drug BT200 (a VWF/FVIII dimer), and while it includes a sub-model for FVIII, the specific numeric parameter values for the FVIII model are not provided in the text (only fixed parameters for VWF and BT200 are shown). |
| popPK | Lissitchkov_2017 | irrelevant | 3 | 0 | The paper describes a PK-guided treatment strategy but the evidence provided only contains efficacy outcomes (bleeding rates) and dosing reductions, lacking any specific numeric PK parameter values (CL, V, t1/2) for Factor VIII. |
| popPK | Wang_2026 | relevant | 9 | 2 | The study focuses on FVIII pharmacokinetics in humans and provides population statistics for half-life (14.1 ± 2.78 h) and in vivo recovery, but lacks explicit clearance or volume values required for a full PK parameter set. |
| popPK | Zhang_2017 | relevant | 10 | 0 | The paper describes a population PK study for coagulation_factor_viii, but the specific numeric parameter values are not present in the provided evidence text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 21:44 UTC</sub>
