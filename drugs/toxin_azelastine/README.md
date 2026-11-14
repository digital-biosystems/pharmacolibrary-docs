<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Azelastine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Azelastine_Park2010_test&quot;,&quot;label&quot;:&quot;Park_2010_test&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_azelastine/Azelastine_Park2010_test.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Azelastine_Peter1995_reference&quot;,&quot;label&quot;:&quot;Peter_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_azelastine/Azelastine_Peter1995_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Azelastine_Qi2023_reference&quot;,&quot;label&quot;:&quot;Qi_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_azelastine/Azelastine_Qi2023_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# Azelastine

- **generic name:** Azelastine
- **T3DB:** [T3D4558](http://www.t3db.ca/toxins/T3D4558) · **DrugBank:** [DB00972](https://go.drugbank.com/drugs/DB00972) · **PubChem:** [CID 2267](https://pubchem.ncbi.nlm.nih.gov/compound/2267)
- **groups:** approved, investigational

## About

Azelastine, a phthalazine derivative, is an antihistamine and mast cell stabilizer available as a nasal spray for hay fever and as eye drops for allergic conjunctivitis. Azelastine is also available as a combination product of azelastine hydrochloride and fluticasone propionate called Dymista&#174;. Dymista&#174; is indicated in patient over 12 years old for symptomatic relief of seasonal allergic rhinitis.

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** absorption of azelastine following ocular administration was relatively low. Systemic bioavailability is approximately 40% after nasal administration.
- **Sources and uses:** For the symptomatic treatment of seasonal allergic rhinitis and non-allergic rhinitis, as well as symptomatic relief of ocular itching associated with allergic conjunctivitis.
- **Mechanism of toxicity:** Azelastine competes with histamine for the H1-receptor sites on effector cells and acts as an antagonist by inhibiting the release of histamine and other mediators involved in the allergic response.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4558">T3DB T3D4558</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 58581-89-8 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:2950">ChEBI 2950</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| Azelastine | parent | 381.904 | C22H24ClN3O | PubChem | [2267](https://pubchem.ncbi.nlm.nih.gov/compound/2267) | Adusumalli_1992, Dings_2022, Park_2010, Riethmüller-Winzen_1994 |
| Azelastine hydrochloride | metabolite | 418.362 | C22H25Cl2N3O | PubChem | [54360](https://pubchem.ncbi.nlm.nih.gov/compound/54360) | Peter_1995 |
| Desmethylazelastine (Azelastine and N-demethyl-azelastine, N-demethyl-azelastine) | metabolite | 367.877 | C21H22ClN3O | PubChem | [162558](https://pubchem.ncbi.nlm.nih.gov/compound/162558) | Adusumalli_1992, Peter_1995 |

## Start here

> **Park_2010_test** — <span class="pk-badge pk-badge--neutral">Not simulated</span> 23 healthy Korean male volunteers, n = 23. [Run it in the simulator](drugs/toxin_azelastine/Azelastine_Park2010_test.md?tab=Simulation) · [record](drugs/toxin_azelastine/Azelastine_Park2010_test.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> | [Park_2010_test](drugs/toxin_azelastine/Azelastine_Park2010_test.md) | ▶ model + simulator | retention, 1 pool | 6 | Park YS et al., Determination of Azelastine in Human Pl…, International journal of bi… (2010) | — |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [↳ point_estimate](drugs/toxin_azelastine/Azelastine_Park2010_point_estimate.md) | — | retention function (no model) | 8 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> | [Peter_1995_reference](drugs/toxin_azelastine/Azelastine_Peter1995_reference.md) | ▶ model + simulator | retention, 1 pool | 1 | Peter G et al., Tolerability and pharmacokinetics of si…, Arzneimittel-Forschung (1995) | — |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> | [Qi_2023_reference](drugs/toxin_azelastine/Azelastine_Qi2023_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Qi W et al., The Comparative Bioavailability of Flut…, Journal of asthma and aller… (2023) | [10.2147/JAA.S416095](https://doi.org/10.2147/JAA.S416095) |
| <span class="pk-rf" hidden data-species="pig" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Adusumalli_1992_reference](drugs/toxin_azelastine/Azelastine_Adusumalli1992_reference.md) | — | 1-compartment (no model) | 4 | Adusumalli VE et al., Pharmacokinetics of azelastine and its…, Drug metabolism and disposi… (1992) | — |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Dings_2022_reference](drugs/toxin_azelastine/Azelastine_Dings2022_reference.md) | — | retention function (no model) | 5 | Dings C et al., Pharmacometric Modeling of the Impact o…, Pharmaceutics (2022) | [10.3390/pharmaceutics14102059](https://doi.org/10.3390/pharmaceutics14102059) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Riethmüller-Winzen_1994_reference](drugs/toxin_azelastine/Azelastine_RiethmllerWinzen1994_reference.md) | — | 1-compartment (no model) | 5 | Riethmüller-Winzen H et al., Tolerability, pharmacokinetics and dose…, Arzneimittel-Forschung (1994) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Dings_2022_SARS_CoV_2_viral_load](drugs/toxin_azelastine/pd_Dings_2022_SARS_CoV_2_viral_load.md) | SARS-CoV-2 viral load ← azelastine · disease-progression model | — | Dings C et al., Pharmacometric Modeling of the Impact o…, Pharmaceutics (2022) | [10.3390/pharmaceutics14102059](https://doi.org/10.3390/pharmaceutics14102059) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Little_1989_histamine_release](drugs/toxin_azelastine/pd_Little_1989_histamine_release.md) | histamine release ← azelastine · inhibition effect | — | Little MM et al., Azelastine inhibits IgE-mediated human…, The Journal of allergy and… (1989) | [10.1016/0091-6749(89)90096-1](https://doi.org/10.1016/0091-6749(89)90096-1) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=azelastine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| distribution | placenta | `ABCB1` inhibitor | DrugBank actor |
| distribution | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2A6` inhibitor/substrate, `CYP2B6` inhibitor, `CYP2C19` inhibitor/substrate, `CYP2C8` substrate, `CYP2C9` inhibitor/substrate, `CYP2D6` inhibitor/substrate, `CYP2E1` inhibitor, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inhibitor/substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` inhibitor | DrugBank actor |
| excretion | liver | `ABCB1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: HRH1 (target), HRH2 (inhibitor), LTC4S (inhibitor), PLA2G1B (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-13 06:30 | 15:28 | 3/4/0 | 2/0/0 | 0/0/0 | 336,485/29,991 | einfracz / qwen3.8-flash-next | 7 | 1/5 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 96 matched, 82 returned
- **screened:** 8  ·  **relevant:** 8
- **records:** 7  ·  extracted 3  ·  needs review 0  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Adusumalli_1992.pdf` | Adusumalli VE et al., Pharmacokinetics of azelastine and its…, Drug metabolism and disposi… (1992) | popPK | 10 |  | [1356730](https://pubmed.ncbi.nlm.nih.gov/1356730) | The abstract reports specific quantitative values for blood:lung concentration ratios and oral bioavailability, along with qualitative half-life and volume trends, though the full table of parameters is not included in the text provided. |
| `Adusumalli_1993.pdf` | Adusumalli VE et al., Pharmacokinetics of the new antiasthma…, Biopharmaceutics & drug dis… (1993) | popPK | 9 | [10.1002/bdd.2510140306](https://doi.org/10.1002/bdd.2510140306) | [8098227](https://pubmed.ncbi.nlm.nih.gov/8098227) | The paper reports quantitative pharmacokinetic parameters (Cmax, Vss, bioavailability) for azelastine in beagle dogs, though specific numeric values are summarized in text rather than provided in a full table within the snippet. |
| `Peter_1995.pdf` | Peter G et al., Tolerability and pharmacokinetics of si…, Arzneimittel-Forschung (1995) | popPK | 9 |  | [7612056](https://pubmed.ncbi.nlm.nih.gov/7612056) | The abstract explicitly reports quantitative pharmacokinetic parameters (half-lives with standard deviations) for the active principle of azelastine in humans. |
| `Riethmüller-Winzen_1994.pdf` | Riethmüller-Winzen H et al., Tolerability, pharmacokinetics and dose…, Arzneimittel-Forschung (1994) | popPK | 9 |  | [7818588](https://pubmed.ncbi.nlm.nih.gov/7818588) | The paper reports specific quantitative pharmacokinetic parameters for azelastine, including AUC0-infinity, Cmax, tmax, and terminal half-life (t1/2 beta), directly within the provided text. |
| `Nakajima_1999_2.pdf` | Nakajima M et al., Azelastine N-demethylation by cytochrom…, Drug metabolism and disposi… (1999) | popPK | 8 |  | [10570018](https://pubmed.ncbi.nlm.nih.gov/10570018) | The paper reports quantitative kinetic parameters (Km and IC50 values) for azelastine N-demethylation by specific CYP enzymes in human liver microsomes, which are directly extractable from the abstract text. |

<sub>queue written 2026-11-13 06:23 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Achterrath-Tuckermann_1992 | irrelevant | 0 | 0 | The paper reports pharmacological effects on mucociliary clearance and mucus secretion, not toxicokinetic parameters like clearance, volume of distribution, or half-life. |
| popPK | Alberty_1998 | irrelevant | 0 | 0 | The paper measures ciliary beat frequency (a pharmacodynamic/toxicodynamic effect) rather than any quantitative toxicokinetic parameters such as absorption, distribution, metabolism, or excretion. |
| popPK | Asamoto_1988 | irrelevant | 0 | 0 | no_text gate: only 67 chars of text extracted (&lt; 400) |
| popPK | Baumann_2012 | irrelevant | 1 | 0 | The paper describes an in vitro nasal tissue model comparing binding ratios and relative concentrations, reporting no absolute quantitative toxicokinetic parameters (such as half-life, clearance, or volume of distribution values) for azelastine. |
| popPK | Bernstein_2000 | irrelevant | 0 | 0 | The paper is a review regarding the safety of benzalkonium chloride as a preservative, mentioning azelastine only as an example of a drug formulation, with no toxicokinetic parameters reported. |
| popPK | Bernstein_2007 | irrelevant | 2 | 0 | The paper is a review article summarizing existing literature and does not report original quantitative kinetic parameters or numeric data within the provided evidence. |
| popPK | Bousquet_2025 | irrelevant | 1 | 0 | The text mentions PK parameters like Cmax and AUC as study objectives/qualitative outcomes but provides no quantitative numeric values for kinetic parameters such as half-life, clearance, or Vd. |
| popPK | Broccatelli_2010 | irrelevant | 0 | 0 | The paper discusses azelastine only as a predicted substrate for ABCB1 efflux based on empirical rules, providing no quantitative toxicokinetic parameters. |
| PGx | Broccatelli_2010 | not_relevant | 2 | 1 | The paper discusses ABCB1-mediated efflux as a mechanistic determinant of side effects across a set of drugs but does not report specific pharmacogenomic data (genotype-to-parameter changes) for azelastine. |
| popPK | Heinemann_2003 | irrelevant | 1 | 0 | The paper focuses on analytical method development for enantiomer separation and only mentions that pharmacokinetics were evaluated without providing any quantitative kinetic parameters. |
| popPK | Hofmann_1998 | irrelevant | 0 | 0 | The paper reports on ciliary beat frequency and preservative toxicity, containing no quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for azelastine. |
| PGx | Imai_1999 | not_relevant | 1 | 1 | The paper characterizes in vitro enzyme kinetics and inhibitor effects to identify metabolic pathways, but does not analyze human genetic variants or their impact on pharmacokinetic/pharmacodynamic parameters. |
| PGx | Katoh_2001 | not_relevant | 1 | 2 | The paper investigates the direct inhibitory effect of the drug azelastine on P-glycoprotein transport, but does not examine how genetic variations affect azelastine's own PK/PD parameters. |
| popPK | Konrat_2022 | irrelevant | 0 | 0 | The paper reports antiviral efficacy (EC50) of azelastine against SARS-CoV-2 in cell cultures and tissue models, but provides no quantitative toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for the substance itself. |
| PGx | Konrat_2022 | not_relevant | 0 | 0 | The paper reports antiviral activity (EC50) and viral load reduction in cell cultures and tissues, with no mention of gene variants, genotypes, or pharmacokinetic/pharmacodynamic parameters modified by pharmacogenomics. |
| popPK | Makino_2004 | relevant | 9 | 3 | The paper reports quantitative pharmacokinetic parameters for azelastine (AUC, half-life, Vd, etc.) in rats, but the specific numeric values are contained in Tables 1-3 which are referenced in the text but not explicitly provided in the extracted evidence (only some AUC fragments are visible). |
| popPK | Mano_1992 | irrelevant | 0 | 0 | The paper describes a chromatographic method for separating azelastine enantiomers, reporting no toxicokinetic parameters. |
| PGx | Morganroth_1997 | not_relevant | 0 | 0 | The study examines drug-drug interactions with a CYP3A4 inhibitor, not genetic polymorphisms or pharmacogenomics. |
| PGx | Nakajima_1999 | not_relevant | 0 | 0 | The study reports in vitro enzymatic inhibition of azelastine metabolites on human CYP isoforms but does not investigate how specific human gene variants, genotypes, or phenotypes alter azelastine's pharmacokinetic or pharmacodynamic parameters. |
| PGx | Nakajima_1999_2 | not_relevant | 2 | 0 | The paper characterizes the enzymatic contribution of multiple CYPs to azelastine metabolism using in vitro microsomes and recombinant enzymes, but does not report on how specific genetic variants or phenotypes alter pharmacokinetic or pharmacodynamic parameters in humans. |
| PGx | Nakajima_2002 | not_relevant | 0 | 0 | The study evaluates a methodological approach (RAF calculation) for in vitro CYP metabolism prediction using azelastine as a substrate model, but does not report pharmacogenomic effects of gene variants on in vivo PK/PD parameters. |
| popPK | Ormerod_1994 | irrelevant | 0 | 0 | The paper is a review of urticaria treatment that only lists azelastine as an antihistamine with mast cell stabilising effects, without reporting any quantitative toxicokinetic parameters. |
| popPK | Pietrzkowicz_1999 | irrelevant | 0 | 0 | The paper is a review or general discussion of topical antihistaminics that does not provide specific quantitative toxicokinetic parameters for azelastine. |
| PGx | Procopiou_2017 | not_relevant | 0 | 0 | The paper describes medicinal chemistry and comparative pharmacology of novel compounds versus azelastine, but contains no data on how gene variants/genotypes affect azelastine's PK or PD parameters. |
| popPK | Procopiou_2017_2 | irrelevant | 2 | 1 | The paper is a medicinal chemistry study focusing on the synthesis of azelastine analogues (3e, 3g, 9g); azelastine is used as a comparator/reference for potency, and no quantitative toxicokinetic parameters for azelastine itself are reported in the text. |
| popPK | Simons_1991 | irrelevant | 2 | 3 | The text mentions azelastine's half-lives but provides no specific numeric values for the parent compound, describing a summary/review of other studies rather than original data extraction. |
| popPK | Simons_1999 | irrelevant | 3 | 8 | This is a review article that cites other papers' data rather than reporting original quantitative kinetic parameters. |
| popPK | Suresh_2025 | irrelevant | 0 | 0 | Azelastine is mentioned only as a topical therapeutic agent (eye drops) for inflammation; the paper reports no kinetic parameters for azelastine. |
| popPK | Szelenyi_1991 | irrelevant | 2 | 0 | The text is a general review of pharmacological properties with no quantitative toxicokinetic parameters (e.g., rate constants, volumes, clearances) for azelastine. |
| popPK | Wong_1992 | irrelevant | 2 | 0 | The paper reports qualitative tissue distribution and localization rather than quantitative kinetic parameters such as half-lives, clearance, or partition coefficients. |
| popPK | Workman_2017 | irrelevant | 0 | 0 | The paper investigates ciliary beat frequency (cilioinhibition) as a local cellular effect, providing no quantitative toxicokinetic parameters for azelastine. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bazelastine%5D&body=Drug%3A%20azelastine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_azelastine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-13 06:23 UTC</sub>
