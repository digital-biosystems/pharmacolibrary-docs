<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;gliclazide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Gliclazide_Mim2023_reference&quot;,&quot;label&quot;:&quot;Mim_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_gliclazide/Gliclazide_Mim2023_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Gliclazide_Rojanasthien2012_reference&quot;,&quot;label&quot;:&quot;Rojanasthien_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_gliclazide/Gliclazide_Rojanasthien2012_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# gliclazide

- **generic name:** gliclazide
- **ATC codes:** `A10BB09`
- **DrugBank:** [DB01120](https://go.drugbank.com/drugs/DB01120) · **PubChem:** [CID 3475](https://pubchem.ncbi.nlm.nih.gov/compound/3475)
- **molar mass:** 323.41 g/mol (C15H21N3O3S) — DrugBank
- **groups:** approved, investigational

## About

Gliclazide is a sulfonylurea blood glucose-lowering drug used to treat diabetes. It is widely used and is included on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q290001](https://www.wikidata.org/wiki/Q290001) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:16 | 1:29 | 2/4/0 | 0/1/0 | 0/0/0 | 68,522/5,483 | einfracz / qwen3.8-27b | 11 | 2/1 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.739), gpt-oss:120b (not confirmed, agreement 0.818). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Mim_2023_reference](drugs/drug_gliclazide/Gliclazide_Mim2023_reference.md) | ▶ model + simulator | 2-compartment, oral | 5 | Mim SR et al., Optimal dosing of gliclazide-A model-ba…, Basic & clinical pharmacolo… (2023) | [10.1111/bcpt.13868](https://doi.org/10.1111/bcpt.13868) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.714). Primary extraction retained.">cross-check: partial</span> | [Rojanasthien_2012_reference](drugs/drug_gliclazide/Gliclazide_Rojanasthien2012_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Rojanasthien N et al., Bioequivalence study of modified-releas…, ISRN pharmacology (2012) | [10.5402/2012/375134](https://doi.org/10.5402/2012/375134) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.636). Primary extraction retained.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: split column 'intersubject variability' is a table statistic/structure column,…</sub><br><sub>route_to: `human_review`</sub> | [Frey_2003_intersubject_variability](drugs/drug_gliclazide/Gliclazide_Frey2003_intersubject_variability.md) | — | 1-compartment (no model) | 4 | Frey N et al., Population PKPD modelling of the long-t…, British journal of clinical… (2003) | [10.1046/j.1365-2125.2003.01751.x](https://doi.org/10.1046/j.1365-2125.2003.01751.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.583). Primary extraction retained.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: split column 'parameters' is a table statistic/structure column, not a study po…</sub><br><sub>route_to: `human_review`</sub> | [Frey_2003_parameters](drugs/drug_gliclazide/Gliclazide_Frey2003_parameters.md) | — | 1-compartment (no model) | 5 | Frey N et al., Population PKPD modelling of the long-t…, British journal of clinical… (2003) | [10.1046/j.1365-2125.2003.01751.x](https://doi.org/10.1046/j.1365-2125.2003.01751.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.545). Primary extraction retained.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: split column 'residual variability' is a table statistic/structure column, not…</sub><br><sub>route_to: `human_review`</sub> | [Frey_2003_residual_variability](drugs/drug_gliclazide/Gliclazide_Frey2003_residual_variability.md) | — | 1-compartment (no model) | 4 | Frey N et al., Population PKPD modelling of the long-t…, British journal of clinical… (2003) | [10.1046/j.1365-2125.2003.01751.x](https://doi.org/10.1046/j.1365-2125.2003.01751.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-check: disputed 1/2</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Shaik_2018_2_reference](drugs/drug_gliclazide/Gliclazide_Shaik2018v2_reference.md) | — | 1-compartment (no model) | 0 | Shaik M et al., Population pharmacokinetics of gliclazi…, Biopharmaceutics & drug dis… (2018) | [10.1002/bdd.2132](https://doi.org/10.1002/bdd.2132) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span> | [Frey_2003_FPG](drugs/drug_gliclazide/pd_Frey_2003_FPG.md) | fasting plasma glucose (FPG) ← gliclazide AUC · delayed effect through an effect compartment | model (no simulator) | Frey N et al., Population PKPD modelling of the long-t…, British journal of clinical… (2003) | [10.1046/j.1365-2125.2003.01751.x](https://doi.org/10.1046/j.1365-2125.2003.01751.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Frey_2003_disease_progression](drugs/drug_gliclazide/pd_Frey_2003_disease_progression.md) | disease progression ← none · disease-progression model | — | Frey N et al., Population PKPD modelling of the long-t…, British journal of clinical… (2003) | [10.1046/j.1365-2125.2003.01751.x](https://doi.org/10.1046/j.1365-2125.2003.01751.x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 7  ·  **relevant:** 1
- **records:** 6  ·  extracted 2  ·  needs_review 0  ·  rejected 4  ·  stale 5
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Shaik_2018_2.pdf` | Shaik M et al., Population pharmacokinetics of gliclazi…, Biopharmaceutics & drug dis… (2018) | popPK | 10 | [10.1002/bdd.2132](https://doi.org/10.1002/bdd.2132) | [29679474](https://pubmed.ncbi.nlm.nih.gov/29679474) | The study reports quantitative population pharmacokinetic parameters (CL, V, ka) for gliclazide in rabbits directly in the text. |
| `Cho_2009.pdf` | Cho HY et al., Pharmacokinetics and bioequivalence eva…, International journal of cl… (2009) | popPK | 8 | [10.5414/cpp47770](https://doi.org/10.5414/cpp47770) | [19954716](https://pubmed.ncbi.nlm.nih.gov/19954716) | The study is a PK study for gliclazide in humans, but it only reports bioequivalence ratios (point estimates) and qualitative findings (like tmax and t1/2 existence) without providing the absolute numeric values for clearance, volume, or half-life in the provided text. |
| `Stetinová_2007.pdf` | Stetinová V et al., Gliclazide: pharmacokinetic-pharmacodyn…, Biopharmaceutics & drug dis… (2007) | popPK | 7 | [10.1002/bdd.550](https://doi.org/10.1002/bdd.550) | [17415747](https://pubmed.ncbi.nlm.nih.gov/17415747) | The study investigates gliclazide PK in rats and reports parameters, but the specific numeric values (CL, V, etc.) are not provided in the abstract or evidence text. |
| `Adiwidjaja_2021.pdf` | Adiwidjaja J et al., Effect of Nigella sativa oil on pharmac…, Biopharmaceutics & drug dis… (2021) | popPK | 5 | [10.1002/bdd.2300](https://doi.org/10.1002/bdd.2300) | [34327715](https://pubmed.ncbi.nlm.nih.gov/34327715) | The study reports population PK parameters (clearance, volume, bioavailability changes) for gliclazide in rats, but the specific numeric values for these parameters are not present in the provided abstract text. |

<sub>queue written 2026-10-07T21:15:40.652780+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adiwidjaja_2021 | relevant | 5 | 0 | The study reports population PK parameters (clearance, volume, bioavailability changes) for gliclazide in rats, but the specific numeric values for these parameters are not present in the provided abstract text. |
| popPK | Brendel_2006 | irrelevant | 3 | 0 | The paper focuses on defining statistical metrics for model validation rather than reporting new population pharmacokinetic parameter estimates, and the evidence provided does not contain any specific numeric values for CL, V, or other PK parameters. |
| popPK | Brendel_2010 | irrelevant | 1 | 0 | The paper is a methodological simulation study on external model evaluation statistics that uses gliclazide data as a background example, but it does not report the underlying quantitative pharmacokinetic parameter values (CL, V, etc.) in the provided evidence. |
| popPK | Cho_2009 | relevant | 8 | 2 | The study is a PK study for gliclazide in humans, but it only reports bioequivalence ratios (point estimates) and qualitative findings (like tmax and t1/2 existence) without providing the absolute numeric values for clearance, volume, or half-life in the provided text. |
| popPK | Frey_2003 | relevant | 4 | 2 | The study describes a population PK/PD model for gliclazide, but the specific quantitative PK parameters (clearance, volume) are reported as being published elsewhere and are not provided in the text, only used as covariates/inputs for the PD model. |
| popPK | Lim_2004 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology/binding assay in Xenopus oocytes focused on the mechanism of taurine on KATP channels, not a pharmacokinetic study, and gliclazide is only used as a comparator ligand in binding assays. |
| PD | Lim_2004 | not_relevant | 0 | 0 | The paper reports IC50 values for taurine (not gliclazide) and states that gliclazide binding was not modified by taurine, but it does not provide a concentration-effect curve or numeric PD parameters for gliclazide itself. |
| popPK | Mim_2023 | relevant | 10 | 2 | The paper develops a compartmental PK model for gliclazide, but the specific numeric parameter estimates (CL, V, Q, ka) are stated to be in Appendix B (Table B2) which is not provided in the evidence; only PD/glucose-insulin model parameters are explicitly listed in the main text. |
| popPK | Rojanasthien_2003 | relevant | 2 | 4 | The study is a bioequivalence trial for gliclazide in humans that reports specific pharmacokinetic parameters like Tmax and t1/2 in the abstract, though it uses non-compartmental analysis rather than population modeling. |
| popPK | Rojanasthien_2012 | irrelevant | 3 | 6 | This is a non-compartmental bioequivalence study in humans that reports AUC and Cmax but lacks the specific compartmental or disposition parameters (CL, V, Q, ka, or t1/2 with volume) required for the extraction task. |
| popPK | Samad_2011 | irrelevant | 1 | 0 | The study reports non-compartmental bioequivalence parameters (AUC, Cmax, t1/2) without providing specific numeric values for clearance, volume of distribution, or a population PK model, and the specific results table is missing from the evidence. |
| PD | Samad_2011 | not_relevant | 4 | 2 | The paper reports PK/PD bioequivalence using surrogate PD parameters (Cmin_glu, Tmax_glu) but does not provide a concentration-effect model or numeric PD parameters (e.g., Emax, EC50) in the text. |
| popPK | Stetinová_2007 | relevant | 7 | 0 | The study investigates gliclazide PK in rats and reports parameters, but the specific numeric values (CL, V, etc.) are not provided in the abstract or evidence text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 21:15 UTC</sub>
