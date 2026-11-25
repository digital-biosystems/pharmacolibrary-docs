<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09D&quot;,&quot;href&quot;:&quot;atc/V09D.md&quot;},{&quot;label&quot;:&quot;technetium (99mTc) galtifenin&quot;}]"></div>

# technetium (99mTc) galtifenin

- **generic name:** technetium (99mTc) galtifenin
- **ATC codes:** `V09DA05`
- **DrugBank:** none · **PubChem:** none
- **groups:** not captured

## About

Technetium 99mTc galtifenin is a diagnostic radiopharmaceutical used for imaging the liver and reticuloendothelial system. It is used in medical imaging to assess hepatic function.

<small>⚠️ **Unverified** — written by `qwen3.8-27b` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Sharma_2022_Liver_function](drugs/drug_technetium_99mtc_galtifenin/pd_Sharma_2022_Liver_function.md) | Liver function ← technetium_99mtc_galtifenin · model not identified | — | Sharma P, Value of Liver Function Tests in Cirrho…, Journal of clinical and exp… (2022) | [10.1016/j.jceh.2021.11.004](https://doi.org/10.1016/j.jceh.2021.11.004) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 05:20 | 0:03 | 0/0/0 | 0/1/0 | 0/0/0 | 4,168/178 | einfracz / qwen3.8-27b | 3 | 2/1 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 89 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fukui_1991 | irrelevant | 2 | 1 | The study reports qualitative imaging results and functional rates (Kd, Ku, Ke) for a diagnostic liver scan in 15 patients, but does not provide a quantitative population-pharmacokinetic compartmental model or standard PK parameters (CL, V, ka) for the drug itself. |
| PGx | Fukui_1991 | not_relevant | 0 | 0 | The paper evaluates the diagnostic utility of a liver radiopharmaceutical in chronic liver disease and reports no genetic variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Gupta_2018 | irrelevant | 1 | 1 | This is a review reporting liver-function assay metrics, not quantitative pharmacokinetic disposition parameters for technetium_99mtc_galtifenin. |
| popPK | Hashimoto_1994 | irrelevant | 2 | 0 | The study reports a diagnostic "extraction index" (EI5) derived from scintigraphy counts for liver function evaluation, not quantitative pharmacokinetic parameters like clearance (CL) or volume (V) for the drug itself. |
| PGx | Hashimoto_1994 | not_relevant | 0 | 0 | The paper describes a nuclear medicine imaging technique for liver function assessment and does not involve pharmacogenomics. |
| popPK | Hashimura_1992 | relevant | 8 | 1 | The study reports a two-compartment model and clearance parameters for the subject drug, but no specific numeric values for CL, V, or ka are present in the text provided. |
| PGx | Hashimura_1992 | not_relevant | 0 | 0 | The study evaluates liver function in rats using a diagnostic tracer and contains no information regarding genetic variants or pharmacogenomics. |
| popPK | Hiraguchi_1995 | irrelevant | 1 | 0 | The study investigates hepatic blood flow parameters (HH4, Kd) rather than standard population pharmacokinetic parameters (CL, V, Q, ka) and does not provide specific numeric values for the radiotracer's clearance or volume in the text. |
| PGx | Hiraguchi_1995 | not_relevant | 0 | 0 | The paper investigates the impact of surgical blood flow manipulation and liver injury on 99mTc-GSA kinetics, not the effect of genetic variants or genotypes. |
| popPK | Iimuro_2017 | irrelevant | 0 | 0 | The paper discusses 99mTc-GSA as a diagnostic imaging agent for liver function assessment, not as a subject of pharmacokinetic parameter estimation (CL, V, etc.). |
| PGx | Iimuro_2017 | not_relevant | 0 | 0 | The paper discusses liver function assessment using ICG and 99mTc-GSA (gallium citrate), not 99mTc-galactofuginin, and contains no pharmacogenomic data. |
| popPK | Kouda_1997 | irrelevant | 0 | 0 | The study investigates the effect of Hepatocyte Growth Factor on asialoglycoprotein receptor uptake using Technetium-99m-GSA (a diagnostic probe) as a marker in rats, and does not report pharmacokinetic parameters for the specific subject drug technetium_99mtc_galtifenin. |
| PGx | Kouda_1997 | not_relevant | 0 | 0 | The paper reports a pharmacodynamic effect of hepatocyte growth factor on a radiotracer in rats, not a pharmacogenomic effect on a human drug. |
| popPK | Kouda_2009 | irrelevant | 0 | 0 | The paper studies Technetium-99m galactosyl human serum albumin (Tc-GSA), not the specific drug technetium_99mtc_galtifenin. |
| PGx | Kouda_2009 | not_relevant | 0 | 0 | The paper evaluates the effect of dietary restriction, not gene variants/genotypes, on technetium-99m-galactosyl human serum albumin pharmacokinetics. |
| popPK | Kubota_1993 | irrelevant | 0 | 0 | The study uses 99mTc-galactosyl serum albumin (GSA) as a diagnostic imaging agent and reports functional liver indices, not population pharmacokinetic parameters for technetium_99mtc_galtifenin. |
| PGx | Kubota_1993 | not_relevant | 0 | 0 | The paper reports the diagnostic utility of a radiopharmaceutical (99mTc-GSA) for imaging liver function in clinical disease, but does not examine the impact of a specific gene variant or genotype on its pharmacokinetics or pharmacodynamics. |
| popPK | Kudo_1992 | irrelevant | 0 | 0 | The study uses Tc-99m GSA (a different radiopharmaceutical, not galtifenin) as a diagnostic imaging agent for liver function, and does not report PK parameters for technetium_99mtc_galtifenin. |
| PGx | Kudo_1992 | not_relevant | 0 | 0 | The paper describes a hepatic imaging technique for assessing liver disease severity in patients but does not report pharmacogenomic effects on drug pharmacokinetics or pharmacodynamics. |
| popPK | Nanashima_2011 | irrelevant | 0 | 0 | The paper uses 99mTc-GSA scintigraphy ratios (HH15, LHL15) as clinical markers for liver function to correlate with ICGR15, rather than reporting population pharmacokinetic parameters (CL, V, t1/2) for the drug's disposition. |
| PGx | Nanashima_2011 | not_relevant | 0 | 0 | The paper evaluates liver function parameters using 99mTc-GSA and does not report any pharmacogenomic effects of gene variants on the PK or PD of the tracer. |
| popPK | Nanashima_2013 | irrelevant | 0 | 0 | The study uses technetium-99m GSA as a diagnostic agent to predict surgical complications, reporting functional indices (HH15) rather than pharmacokinetic disposition parameters (CL, V, ka) for the drug itself. |
| PGx | Nanashima_2013 | not_relevant | 0 | 0 | The paper focuses on liver function tests (using Tc-99m GSA) to predict surgical complications and does not report pharmacogenomic effects on the PK or PD of the radiotracer itself. |
| popPK | Ohno_1993 | irrelevant | 0 | 0 | The paper studies 99mTc-DTPA-galactosyl serum albumin (99mTc-GSA), which is a different drug from the subject 99mTc-galtifenin. |
| PGx | Ohno_1993 | not_relevant | 0 | 0 | The paper describes the clinical application of a diagnostic radiopharmaceutical for liver function assessment and does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Rassam_2017 | irrelevant | 0 | 0 | The paper is a review of liver function assessment modalities and does not report original quantitative pharmacokinetic parameters (CL, V, t1/2) for the subject drug. |
| PGx | Rassam_2017 | not_relevant | 0 | 0 | The paper reviews liver function assessment modalities and does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Sharma_2022 | irrelevant | 0 | 0 | The paper is a review of liver function tests and does not report pharmacokinetic parameters for technetium-99mtc galtifenin. |
| PGx | Sharma_2022 | not_relevant | 0 | 0 | The paper discusses liver function tests and imaging techniques for cirrhosis, mentioning 99mTc-mebrofenin as a diagnostic tool, but does not report pharmacogenomic effects on the PK/PD of 99mTc-galtifenin. |
| popPK | Shiomi_1993 | irrelevant | 1 | 1 | The paper reports clinical liver function indices (HH15, LHL15) for 99mTc-GSA but does not provide quantitative pharmacokinetic parameters (CL, V, half-life, rate constants) for the drug technetium_99mtc_galtifenin. |
| PGx | Shiomi_1993 | not_relevant | 0 | 0 | The paper reports clinical correlations of hepatic imaging parameters in liver disease, but does not report any pharmacogenomic effects (gene variants/genotypes) on the pharmacokinetics or pharmacodynamics of the drug. |
| popPK | Sumiyoshi_2018 | irrelevant | 0 | 0 | The study focuses on liver function assessment (ICG clearance) using 99mTc-GSA as a diagnostic imaging agent, not on the pharmacokinetic parameters (CL, V, t1/2) of 99mTc-galtifenin itself. |
| PGx | Sumiyoshi_2018 | not_relevant | 0 | 0 | The paper evaluates 99mTc-GSA imaging for liver function assessment but contains no pharmacogenomic data or analysis of genetic variants affecting the pharmacokinetics or pharmacodynamics of technetium_99mtc_galtifenin. |
| popPK | Taniguchi_2014 | relevant | 8 | 4 | The study is a clinical PK study in humans reporting quantitative hepatic clearance and retention indices (LHL15, HH15) for the subject drug 99mTc-GSA (99mTc-galactosyl HSA, corresponding to the query's 'galtifenin'). |
| PGx | Taniguchi_2014 | not_relevant | 0 | 0 | The paper evaluates the clinical utility of Tc-99m-GSA SPECT for assessing liver fibrosis and contains no information on pharmacogenomic effects on its pharmacokinetics or pharmacodynamics. |
| popPK | Torizuka_1992 | irrelevant | 0 | 0 | The paper studies 99mTc-GSA (a different radiopharmaceutical) and does not contain data for technetium_99mtc_galtifenin. |
| PGx | Torizuka_1992 | not_relevant | 0 | 0 | The paper describes a clinical study on the liver imaging properties of 99mTc-GSA but does not investigate any gene variants or pharmacogenomic effects on its PK/PD. |
| popPK | Toyama_1995 | irrelevant | 1 | 1 | The study is a diagnostic imaging study evaluating liver function using 99mTc-GSA (a different compound from galtifenin), and it does not report pharmacokinetic parameters for the target drug. |
| PGx | Toyama_1995 | not_relevant | 0 | 0 | The paper evaluates the diagnostic utility of 99mTc-GSA imaging for liver function but does not report any pharmacogenomic effects or genetic variations influencing the drug's pharmacokinetics or pharmacodynamics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btechnetium_99mtc_galtifenin%5D&body=Drug%3A%20technetium_99mtc_galtifenin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_technetium_99mtc_galtifenin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
