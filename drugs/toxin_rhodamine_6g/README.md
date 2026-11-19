<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Household toxins&quot;,&quot;href&quot;:&quot;toxins/HOUS.md&quot;},{&quot;label&quot;:&quot;Rhodamine 6g&quot;}]"></div>

# Rhodamine 6g

- **generic name:** Rhodamine 6g
- **T3DB:** [T3D4793](http://www.t3db.ca/toxins/T3D4793) · **DrugBank:** [DB03825](https://go.drugbank.com/drugs/DB03825) · **PubChem:** [CID 65211](https://pubchem.ncbi.nlm.nih.gov/compound/65211)
- **groups:** investigational

## About

Rhodamine 6G is a highly fluorescent Rhodamine family dye. It is often used as a tracer dye within water to determine the rate and direction of flow and transport. Rhodamine dyes fluoresce and can thus be detected easily and inexpensively with instruments called fluorometers. …

- **Category:** Household Toxin, Natural Toxin
- **Sources and uses:** It is often used as a tracer dye within water to determine the rate and direction of flow and transport. Rhodamine dyes fluoresce and can thus be detected easily and inexpensively with instruments called fluorometers. …
- **Carcinogenicity:** IARC group 3, not classifiable as to its carcinogenicity to humans.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4793">T3DB T3D4793</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 989-38-8 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:52672">ChEBI 52672</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| rhodamine_6g | metabolite | 443.567 | C28H31N2O3+ | PubChem | [65211](https://pubchem.ncbi.nlm.nih.gov/compound/65211) | Lahnstein_2008 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Audi_2020_reference](drugs/toxin_rhodamine_6g/Rhodamine6g_Audi2020_reference.md) | — | 1-compartment (no model) | 0 | Audi SH et al., Quantification of mitochondrial membran…, Journal of applied physiolo… (2020) | [10.1152/japplphysiol.00789.2019](https://doi.org/10.1152/japplphysiol.00789.2019) |
| <span class="pk-rf" hidden data-species="rabbit" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: no kinetic quantity — no half-life, rate constant, volume or clearance (exposur…</sub> | [Lahnstein_2008_reference](drugs/toxin_rhodamine_6g/Rhodamine6g_Lahnstein2008_reference.md) | — | 1-compartment (no model) | 1 | Lahnstein K et al., Pulmonary absorption of aerosolized flu…, International journal of ph… (2008) | [10.1016/j.ijpharm.2007.09.027](https://doi.org/10.1016/j.ijpharm.2007.09.027) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=rhodamine_6g).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` substrate, `ABCC1` substrate | DrugBank actor |
| distribution | lung | `ABCC1` substrate | DrugBank actor |
| distribution | placenta | `ABCB1` substrate | DrugBank actor |
| distribution | testis | `ABCB1` substrate | DrugBank actor |
| excretion | kidney | `ABCB1` substrate | DrugBank actor |
| excretion | liver | `ABCB1` substrate | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-15 16:34 | 6:13 | 0/2/0 | 0/0/0 | 0/0/0 | 167,012/14,483 | ollama / glm-5.3-flash | 11 | 3/2 | 11/0 | 0 |

## Coverage

- **PubMed hits:** 43 matched, 43 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lahnstein_2008.pdf` | Lahnstein K et al., Pulmonary absorption of aerosolized flu…, International journal of ph… (2008) | popPK | 8 | [10.1016/j.ijpharm.2007.09.027](https://doi.org/10.1016/j.ijpharm.2007.09.027) | [17980981](https://pubmed.ncbi.nlm.nih.gov/17980981) | Reports quantitative pulmonary absorption of rhodamine 6G in an isolated perfused rabbit lung, with perfusate concentrations, percent absorbed (3.3±0.7%), and partition coefficient given directly in the abstract. |
| `Audi_2020.pdf` | Audi SH et al., Quantification of mitochondrial membran…, Journal of applied physiolo… (2020) | popPK | 7 | [10.1152/japplphysiol.00789.2019](https://doi.org/10.1152/japplphysiol.00789.2019) | [32134711](https://pubmed.ncbi.nlm.nih.gov/32134711) | A PBPK model of rhodamine 6G pulmonary disposition in isolated rat lungs with a quantitative estimate (Δψm −144 ± 24 mV); only this value appears in the evidence, with other kinetic parameters likely in the full paper. |
| `Cheruvu_2006.pdf` | Cheruvu NP et al., Bovine and porcine transscleral solute…, Investigative ophthalmology… (2006) | popPK | 7 | [10.1167/iovs.06-0404](https://doi.org/10.1167/iovs.06-0404) | [17003447](https://pubmed.ncbi.nlm.nih.gov/17003447) | Rhodamine 6G is a study substance with measured transscleral permeability coefficients, but the numeric Papp values are not shown in the abstract (only ranking/fold-reductions), so exact values likely live in tables/figures not provided. |

<sub>queue written 2026-11-15 16:32 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cheruvu_2006 | relevant | 7 | 2 | Rhodamine 6G is a study substance with measured transscleral permeability coefficients, but the numeric Papp values are not shown in the abstract (only ranking/fold-reductions), so exact values likely live in tables/figures not provided. |
| popPK | Durk_2012 | irrelevant | 1 | 2 | Rhodamine 6G appears only as a fluorescent P-gp substrate probe in cellular uptake assays; no kinetic parameters are reported for it as the subject substance. |
| popPK | Dzampaeva_2026 | irrelevant | 0 | 0 | Rhodamine 6G is used only as a fluorescent staining reagent for mitochondrial membrane potential, with no toxicokinetic parameters for it. |
| popPK | Elliott_1990 | irrelevant | 2 | 0 | Quantitative pharmacokinetics concern rhodamine B, with rhodamine 6G appearing only as a comparator in mutagenicity assays; no numeric kinetic parameters for rhodamine 6G are present. |
| PGx | Hoque_2015 | not_relevant | 2 | 3 | Rhodamine-6G is used only as a P-gp probe substrate to test raltegravir inhibition; no genetic variant effect on PK/PD is reported. |
| PGx | Inoue_2022 | not_relevant | 0 | 0 | In vitro substrate binding KD of rhodamine 6G to CmABCB1 mutant via fluorescence quenching; no gene variant/genotype effect on PK/PD parameters. |
| popPK | Lampidis_1989 | relevant | 4 | 7 | Quantitative accumulation ratios, IC50 shifts and a partition coefficient for rhodamine 6G are reported, but these are in vitro cell-culture uptake/cytotoxicity measurements rather than whole-body in vivo toxicokinetic parameters. |
| popPK | Matchette_2007 | irrelevant | 0 | 0 | Rhodamine 6G appears only as a fluorescence calibration standard; the kinetic parameters reported are for fluoroquinolones, not rhodamine 6G. |
| popPK | Mayhan_2000 | irrelevant | 0 | 0 | Rhodamine 6G is used only as a fluorescent leukocyte label, not as a kinetic subject; fitted clearance values concern FITC-albumin, dextran and fluorescein. |
| popPK | Mori_2026 | irrelevant | 0 | 0 | Rhodamine 6G appears solely as a dye reagent in an efflux assay for Candida fluconazole resistance; the kinetic parameters (AUC, tissue ratios, half-life) belong to fluconazole, not R6G. |
| PGx | Morita_2013 | not_relevant | 2 | 3 | No gene variant/genotype/phenotype contrast; only transporter-mediated efflux of rhodamine 6G measured in vitro. |
| PGx | Moritsugu_2025 | not_relevant | 0 | 0 | Computational study of transporter conformational dynamics, no gene variant effect on PK/PD parameters reported. |
| PGx | Sharma_2009 | not_relevant | 2 | 4 | Paper reports curcumin modulating R6G efflux via transporters; the variant-genotype-to-PK/PD effect for rhodamine 6G (a probe, not a drug) with fitted effect sizes is not the pharmacogenomic endpoint described. |
| popPK | Steele_2011 | irrelevant | 2 | 3 | Rhodamine 6G serves only as a fluorescent surrogate/release-profile mimic for paclitaxel in polymer thin films; in vitro release kinetics (power law coefficients in Table 1) are computed for paclitaxel and FDAc, not for rhodamine 6G as a subject substance in humans or animals. |
| popPK | Wang_2012 | irrelevant | 1 | 2 | Rhodamine 6G is used as a fluorescent probe absorbed into PDMS device material; this is a materials/engineering study, not in vivo or biological toxicokinetics, and the numeric parameters (log P, % absorption) characterize the device, not animal or human disposition. |
| PGx | Yokota_2011 | not_relevant | 2 | 2 | No gene variant/genotype effect on rhodamine 6G is reported; Pgp expression changes with maturation stage, not genetic variation. |
| popPK | Zhu_2020 | irrelevant | 0 | 0 | Rhodamine 6G appears solely as an analytical derivatization reagent (d0-/d3-MCR6G) for quantifying triptolide in rats; no kinetic parameters of rhodamine 6G itself are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brhodamine_6g%5D&body=Drug%3A%20rhodamine_6g%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_rhodamine_6g/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-15 16:32 UTC</sub>
