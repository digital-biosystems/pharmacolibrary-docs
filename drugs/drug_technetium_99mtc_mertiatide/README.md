<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09C&quot;,&quot;href&quot;:&quot;atc/V09C.md&quot;},{&quot;label&quot;:&quot;technetium (99mTc) mertiatide&quot;}]"></div>

# technetium (99mTc) mertiatide

- **generic name:** technetium (99mTc) mertiatide
- **ATC codes:** `V09CA03`
- **DrugBank:** none · **PubChem:** none
- **groups:** not captured

## About

Technetium 99mTc mertiatide is a diagnostic radiopharmaceutical used for imaging the renal system.

<small>⚠️ **Unverified** — written by `qwen3.8-27b` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| technetium_99mtc_mertiatide | metabolite | 417.207 | C8H8N3Na2O6STc | PubChem | [168313563](https://pubchem.ncbi.nlm.nih.gov/compound/168313563) | Peters_1994 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Peters_1994_reference](drugs/drug_technetium_99mtc_mertiatide/Technetium99mtcMertiatide_Peters1994_reference.md) | — | 1-compartment (no model) | 2 | Peters AM et al., Measurement of the extravascular concen…, Nuclear medicine communicat… (1994) | [10.1097/00006231-199402000-00002](https://doi.org/10.1097/00006231-199402000-00002) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 04:09 | 0:03 | 0/1/0 | 0/0/0 | 0/0/0 | 3,397/199 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 359 matched, 18 returned
- **screened:** 2  ·  **relevant:** 0
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Beyer-Enke_1991 | irrelevant | 0 | 0 | The study focuses on iodinated contrast media as the primary subject, using Tc-99m MAG3 (mertiatide) only as a comparator for correlation analysis, and does not report specific population PK parameters for mertiatide. |
| PGx | Beyer-Enke_1991 | not_relevant | 0 | 0 | The paper discusses 99mTc-MAG3 (mertiatide) clearance as a kidney function measure but does not report any pharmacogenomic effects (gene variants) on its PK or PD parameters. |
| popPK | Boss_2006 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of gadolinium (Gd-DTPA) in children using MRI, and does not report data for the subject drug technetium_99mtc_mertiatide. |
| PGx | Boss_2006 | not_relevant | 0 | 0 | The study evaluates MR imaging techniques for renal function using gadolinium and compares it to scintigraphy, with no mention of pharmacogenomics or Tc-99m mertiatide. |
| popPK | Cayir_2016 | irrelevant | 1 | 0 | The study uses the radiopharmaceutical as a diagnostic tool to evaluate renal function in humans rather than conducting a pharmacokinetic study of the agent's disposition. |
| PGx | Cayir_2016 | not_relevant | 0 | 0 | The study evaluates renal function in volatile substance abusers using a diagnostic tracer and does not investigate the impact of genetic variants on the pharmacokinetics or pharmacodynamics of technetium_99mtc_mertiatide. |
| popPK | Dubovsky_1988 | irrelevant | 0 | 0 | The paper is a review of radionuclide imaging in renal transplants and does not contain pharmacokinetic data for technetium-99m mertiatide. |
| PGx | Dubovsky_1988 | not_relevant | 0 | 0 | The paper is a review of radionuclide evaluation methods and does not report any pharmacogenomic effects on the PK or PD of technetium-99mtc mertiatide. |
| popPK | Eshima_1990 | irrelevant | 0 | 0 | The paper discusses 99mTc mercaptoacetyltriglycine (MAG3) and OIH, not technetium_99mtc_mertiatide, and contains no quantitative PK parameters for the target drug. |
| PGx | Eshima_1990 | not_relevant | 0 | 0 | The text discusses the development of 99mTc renal tubular agents (e.g., 99mTc MAG3) but contains no information regarding gene variants, genotypes, or pharmacogenomic effects. |
| popPK | Faure_2016 | irrelevant | 2 | 2 | The study uses technetium-99m mertiatide (MAG-3) as a diagnostic imaging agent for assessing renal function and drainage time (T/2) in a surgical cohort, rather than modeling the pharmacokinetic parameters (CL, V, etc.) of the drug itself. |
| PGx | Faure_2016 | not_relevant | 0 | 0 | The paper reports clinical outcomes of surgical pyeloplasty using MAG-3 diuretic renography but does not investigate genetic variants or pharmacogenomics. |
| popPK | Ismaili_2005 | irrelevant | 0 | 0 | The study uses 99mTc-MAG3 (a different drug) as a diagnostic imaging agent, not technetium_99mtc_mertiatide. |
| PGx | Ismaili_2005 | not_relevant | 0 | 0 | The paper describes renal maturation in pediatric patients and does not investigate any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of technetium-99m mertiatide. |
| popPK | Marboeuf_2010 | irrelevant | 0 | 0 | The paper is a clinical management study of renal atrophy using MAG3 as a diagnostic probe for blood pressure outcomes, and it does not report pharmacokinetic parameters (CL, V, t1/2) for technetium-99mtc_mertiatide. |
| PGx | Marboeuf_2010 | not_relevant | 0 | 0 | The paper reports clinical management of renal atrophy and hypertension outcomes, with no mention of pharmacogenomics or drug pharmacokinetics/pharmacodynamics. |
| popPK | Peters_1994 | irrelevant | 0 | 0 | The study investigates 99TcM-MAG3 (mercaptoacetyl triglycine), not 99TcM-mertiatide, so the subject drug is different. |
| PGx | Peters_1994 | not_relevant | 0 | 0 | The paper reports population PK parameters for renal agents (including MAG3) but does not investigate or report any pharmacogenomic effects (gene variants) on these parameters. |
| popPK | Piepsz_1994 | relevant | 9 | 4 | The study reports a compartmental model and quantitative accuracy metrics (SEE) for MAG3 clearance, though specific parameter estimates (mean CL values) are not explicitly listed, only the error ranges and optimal sampling times. |
| PGx | Piepsz_1994 | not_relevant | 0 | 0 | The paper evaluates sampling times for accurate renal clearance measurement but does not report any association between genetic variants and pharmacokinetic parameters. |
| popPK | Reiners_1993 | irrelevant | 0 | 0 | The paper is a review of diuresis renography using 99mTc-MAG3 (technetium_99mtc_mertiatide) as a diagnostic imaging agent, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PGx | Reiners_1993 | not_relevant | 0 | 0 | The paper describes the clinical protocol for diuresis renography using Tc-99m-MAG3 and does not report any pharmacogenomic effects. |
| popPK | Rossleigh_2001 | irrelevant | 0 | 0 | The paper is a review of diagnostic nuclear medicine techniques using different radiopharmaceuticals (DMSA, MAG3) and does not report pharmacokinetic parameters for mertiatide. |
| PGx | Rossleigh_2001 | not_relevant | 0 | 0 | The paper describes nuclear medicine techniques and does not report pharmacogenomic effects on the PK/PD of technetium_99mtc_mertiatide. |
| popPK | Russell_1995 | irrelevant | 2 | 2 | The paper reports renal clearance measurements for 99mTc-MAG3 (a renal agent) rather than technetium_99mtc_mertiatide (a bone agent), and it lacks the specific multi-compartmental PK parameters (V, Q) required. |
| PGx | Russell_1995 | not_relevant | 0 | 0 | The paper compares renal clearance measurement methods for 99mTc-MAG3 but does not investigate the impact of gene variants or genotypes on these parameters. |
| popPK | Szabo_2011 | irrelevant | 0 | 0 | The paper is a review of molecular imaging principles and does not report quantitative pharmacokinetic parameters (CL, V, Q, etc.) for technetium_99mtc_mertiatide (Tc-99m MAG3). |
| PGx | Szabo_2011 | not_relevant | 0 | 0 | The paper discusses molecular imaging of the kidneys and various radiopharmaceuticals but does not report any pharmacogenomic effects of gene variants on the pharmacokinetic or pharmacodynamic parameters of technetium_99mtc_mertiatide. |
| popPK | Thorson_1992 | irrelevant | 0 | 0 | The study is a radiochemical stability and cost-efficiency analysis of MAG3 kit fractionation, reporting radiochemical purity values rather than pharmacokinetic disposition parameters (CL, V, t1/2). |
| PGx | Thorson_1992 | not_relevant | 0 | 0 | The paper investigates the feasibility of fractionating and freezing MAG3 kits for cost reduction and stability, reporting no genetic variants or pharmacogenomic effects on pharmacokinetics or pharmacodynamics. |
| popPK | Verdera_1994 | irrelevant | 0 | 0 | The study evaluates technetium-99mtc-CAMI (a different drug) and only mentions technetium-99mtc-mertiatide (99mTc-MAG3) as a comparator without providing specific PK parameters for it. |
| PGx | Verdera_1994 | not_relevant | 0 | 0 | The paper evaluates a novel agent (Tc-CAMI) in dogs and does not report pharmacogenomic effects on the PK/PD of technetium_99mtc_mertiatide. |
| popPK | Vranken_2005 | irrelevant | 3 | 0 | The study uses Tc-99m-MAG3 as a diagnostic imaging agent to assess renal function in children, reporting clinical outcomes (GFR/SRF changes) rather than quantitative pharmacokinetic parameters (CL, V, ka) for the radiotracer itself. |
| PGx | Vranken_2005 | not_relevant | 0 | 0 | The paper reports on renal maturation in children using Tc-99m MAG3 imaging but contains no information on pharmacogenomics or genetic variants affecting the drug's pharmacokinetics or pharmacodynamics. |
| popPK | Weber_1990 | irrelevant | 0 | 0 | The paper investigates 99mTc-radiolabeled antibody Fab' conjugates using a chelator related to mercaptoacetyl-triglycine, not the specific drug technetium_99mtc_mertiatide, and reports biodistribution rather than specific PK parameters for the target drug. |
| PGx | Weber_1990 | not_relevant | 0 | 0 | The paper reports biodistribution differences between ester-linked and amide-linked chelators in a mouse model, but does not investigate any pharmacogenomic effect (gene variant) on PK parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btechnetium_99mtc_mertiatide%5D&body=Drug%3A%20technetium_99mtc_mertiatide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_technetium_99mtc_mertiatide/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 04:08 UTC</sub>
