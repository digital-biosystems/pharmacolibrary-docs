<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Fungal toxins&quot;,&quot;href&quot;:&quot;toxins/FUNG.md&quot;},{&quot;label&quot;:&quot;alpha-Zearalenol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;AlphaZearalenol_Qin2026_zol&quot;,&quot;label&quot;:&quot;Qin_2026_zol&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_alpha_zearalenol/AlphaZearalenol_Qin2026_zol.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# alpha-Zearalenol

- **generic name:** alpha-Zearalenol
- **T3DB:** [T3D4052](http://www.t3db.ca/toxins/T3D4052) · **PubChem:** [CID 5284645](https://pubchem.ncbi.nlm.nih.gov/compound/5284645)

## About

Alpha-zearalenol belongs to the family of Macrolides and Analogues. These are organic compounds containing a lactone ring of at least twelve members. The term 'macrolide' encompasses a diverse family of unrelated compounds with large macrolactam rings.

- **Category:** Fungal Toxin, Natural Toxin
- **Mechanism of toxicity:** Mycotoxins, such as alpha-zearalenol (alpha-ZOL) and beta-zearalenol (beta-ZOL), as contaminants of animal food can impair fertility and can cause abnormal fetal development in farm animals. The addition of alpha- or beta-ZOL (7.5, 15 and 30 microM) to cultures stimulated with FSH (0.01 microg) or forskolin (10 microM) reduced progesterone synthesis and the levels of p450scc and 3beta-HSD transcripts in a dose-dependent manner (P<0.05). …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4052">T3DB T3D4052</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 36455-72-8</small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| alpha_zearalenol | metabolite | 320.385 | C18H24O5 | PubChem | [5284645](https://pubchem.ncbi.nlm.nih.gov/compound/5284645) | Buranatragool_2015 |
| beta-Zearalenol (β-ZOL) | metabolite | — (mass units only) | — | — | — | — |
| zearalenone (ZEN) | metabolite | — (mass units only) | — | — | — | — |

## Start here

> **Qin_2026_zol** — <span class="pk-badge pk-badge--orange">Needs review</span> male sheep, n = 5. [Run it in the simulator](drugs/toxin_alpha_zearalenol/AlphaZearalenol_Qin2026_zol.md?tab=Simulation) · [record](drugs/toxin_alpha_zearalenol/AlphaZearalenol_Qin2026_zol.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="sheep" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88 — no SI value to build from</sub> | [Qin_2026_zol](drugs/toxin_alpha_zearalenol/AlphaZearalenol_Qin2026_zol.md) | ▶ model + simulator | retention, 1 pool | 6 | Qin J et al., Toxicokinetics, Biotransformation, Excr…, Toxins (2026) | [10.3390/toxins18090364](https://doi.org/10.3390/toxins18090364) |
| <span class="pk-rf" hidden data-species="sheep" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [↳ reference](drugs/toxin_alpha_zearalenol/AlphaZearalenol_Qin2026_reference.md) | — | 1-compartment (no model) | 4 |  |  |
| <span class="pk-rf" hidden data-species="bird" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Buranatragool_2015_reference](drugs/toxin_alpha_zearalenol/AlphaZearalenol_Buranatragool2015_reference.md) | — | 1-compartment (no model) | 11 | Buranatragool K et al., Dispositions and tissue residue of zear…, Toxicology reports (2015) | [10.1016/j.toxrep.2014.12.011](https://doi.org/10.1016/j.toxrep.2014.12.011) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-15 13:53 | 15:52 | 1/2/0 | 0/0/0 | 0/0/0 | 475,419/56,447 | ollama / glm-5.3-flash | 29 | 5/15 | 29/0 | 0 |

## Coverage

- **PubMed hits:** 71 matched, 70 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Catteuw_2019.pdf` | Catteuw A et al., Insights into In Vivo Absolute Oral Bio…, Journal of agricultural and… (2019) | popPK | 8 | [10.1021/acs.jafc.8b05838](https://doi.org/10.1021/acs.jafc.8b05838) | [30807145](https://pubmed.ncbi.nlm.nih.gov/30807145) | The paper directly reports compartmental toxicokinetic models and bioavailability for α-ZEL in pigs, but the abstract's summary does not include the actual numeric parameter values, which likely reside in figures/tables not provided in the evidence. |
| `Dong_2010.pdf` | Dong M et al., The toxic effects and fate of intraveno…, Toxicon : official journal… (2010) | popPK | 5 | [10.1016/j.toxicon.2009.10.004](https://doi.org/10.1016/j.toxicon.2009.10.004) | [19825386](https://pubmed.ncbi.nlm.nih.gov/19825386) | Alpha-ZOL is quantified as a metabolite in a goat kinetic study (urine/feces excretion), but the only numeric values in the evidence (t½α = 3.15 h, t½β = 28.58 h) belong to zearalenone; alpha-ZOL's own parameters presumably sit in tables/figures not provided. |
| `Wang_2022.pdf` | Wang R et al., New Insights into the Deposition of Zea…, Journal of agricultural and… (2022) | popPK | 5 | [10.1021/acs.jafc.2c05159](https://doi.org/10.1021/acs.jafc.2c05159) | [36269318](https://pubmed.ncbi.nlm.nih.gov/36269318) | ADME study of ZEN in minipigs where α-ZOL is the main metabolite so its kinetic behaviour is in scope, but the evidence shows only the abstract and no actual numeric kinetic values (those likely live in figures/tables not provided). |

<sub>queue written 2026-11-15 13:47 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Agahi_2020 | not_relevant | 1 | 3 | In silico ADME/tOX predictions for alpha-zearalenol; no gene variant/genotype/phenotype effect on PK or PD parameters. |
| popPK | Balázs_2023 | irrelevant | 1 | 5 | Reports an in vitro enzyme-inhibition IC50 (17.1 μM) for α-ZEL on xanthine oxidase, not any disposition/elimination/partition kinetic parameter of α-ZEL itself. |
| popPK | Carballo_2021 | irrelevant | 1 | 6 | This is a human urinary biomonitoring/exposure study reporting αZOL concentrations and PDI/TDI comparisons, with no kinetic parameters (half-life, clearance, rate constants); the 10% ZEA urinary excretion rate applies to ZEA, not αZOL specifically. |
| popPK | Catteuw_2019 | relevant | 8 | 3 | The paper directly reports compartmental toxicokinetic models and bioavailability for α-ZEL in pigs, but the abstract's summary does not include the actual numeric parameter values, which likely reside in figures/tables not provided in the evidence. |
| popPK | De_2012 | irrelevant | 2 | 2 | This is an analytical method validation paper; α-ZEL was detected only near LOQ in plasma with no numeric kinetic parameters reported. |
| popPK | Devreese_2012 | irrelevant | 3 | 5 | This is an analytical method-validation paper for measuring α-zearalenol in pig plasma; no kinetic parameters (half-life, clearance, rate constants, AUC or a disposition model) are reported, only assay performance metrics (LOQ, precision, accuracy). |
| popPK | Dong_2010 | relevant | 5 | 2 | Alpha-ZOL is quantified as a metabolite in a goat kinetic study (urine/feces excretion), but the only numeric values in the evidence (t½α = 3.15 h, t½β = 28.58 h) belong to zearalenone; alpha-ZOL's own parameters presumably sit in tables/figures not provided. |
| popPK | Ezekiel_2025 | irrelevant | 0 | 0 | This is a urinary exposure/biomonitoring study with no kinetic parameters for α-zearalenol, which appears only as a quantified biomarker (3% detection), not a toxicokinetic subject. |
| popPK | Faisal_2018 | irrelevant | 4 | 3 | In vitro serum albumin binding constants for alpha-zearalenol (a protein-binding parameter, not in vivo TK disposition); Table 1 with the actual numeric K values is not included, only a logK range (4.05–5.43). |
| popPK | Fleck_2016 | irrelevant | 1 | 3 | This is a human biomonitoring exposure study reporting only urinary concentrations (0.11 µg/L a-ZEL) and a tentative urine-to-serum ratio (0.3), not toxicokinetic parameters such as half-life, clearance, or rate constants for a-ZEL. |
| popPK | Foerster_2021 | irrelevant | 2 | 3 | Human biomonitoring study reporting urinary α-zearalenol concentrations and PDI, not kinetic parameters; PDI details partly in supplementary material. |
| popPK | Heyndrickx_2015 | irrelevant | 1 | 1 | Human biomonitoring exposure study; alpha-zearalenol merely detected in one urine sample with measured concentrations but no kinetic parameters (no half-life, clearance, or rate constants) of any kind. |
| PGx | Kaci_2024 | not_relevant | 0 | 0 | The paper reports enzyme/transporter interaction data (CYP/OATP inhibition) for α-zearalenol in vitro, with no gene variants, genotypes, or phenotypes linked to PK/PD parameters. |
| popPK | Krausová_2024 | irrelevant | 1 | 1 | Exposure biomonitoring study measuring concentrations and intake estimates in pregnant women, with no kinetic parameters (half-life, clearance, rate constants) for α-zearalenol. |
| popPK | Li_2018 | irrelevant | 0 | 0 | Analytical method validation and human urine biomonitoring study reporting only exposure concentrations and recovery/LOD metrics, no toxicokinetic parameters (half-life, clearance, etc.) for α-zearalenol. |
| popPK | Li_2022 | irrelevant | 4 | 6 | In vitro HSA binding constants (Ka = 3.98×10^4 M−1 for α-ZOL) are reported, but these are albumin-binding/quenching constants, not in vivo toxicokinetic parameters; no actual half-life, clearance or rate constant value is given. |
| popPK | Llorens_2022 | irrelevant | 1 | 5 | This is an exposure/biomonitoring method and occurrence study — tissue concentrations of α-ZOL in livestock livers, with no kinetic parameters (half-life, clearance, rate constants); only concentration ranges appear in text. |
| popPK | Lu_2022 | relevant | 3 | 1 | α-ZEL appears only as a measured metabolite of administered Z14G in rats; the kinetic parameters reported belong to Z14G, and no numeric α-ZEL values appear in the evidence (likely in tables/figures not provided). |
| popPK | Martins_2025 | irrelevant | 0 | 0 | This is a human biomonitoring exposure study reporting only detection frequencies of α-zearalenol in urine (12%, 4/33) with no half-life, clearance, excretion rate constant, or any kinetic parameter for α-zearalenol itself (excretion rates used apply to DON, ZEN, OTA only). |
| popPK | McKeon_2024 | irrelevant | 2 | 2 | This is a human biomonitoring exposure/risk study; α-ZEL appears only as measured urinary concentrations and in EDI estimates, with no kinetic parameter of α-ZEL itself (excretion fractions cited from other papers, EDI values in a table mostly not shown). |
| popPK | Mihalache_2026 | irrelevant | 0 | 0 | This is a human biomonitoring/exposure study reporting urinary concentrations and dietary associations for α-zearalenol, with no kinetic parameters (half-life, clearance, rates, or model) of any kind. |
| popPK | Ndaw_2021 | irrelevant | 1 | 1 | This is an analytical method development and exposure biomonitoring study; α-zearalenol appears only as an analyte with LOQs and urinary detection rates, with no kinetic parameter (half-life, clearance, rate constant, etc.). |
| popPK | Ndaw_2021_2 | irrelevant | 1 | 6 | Occupational biomonitoring/exposure study; it reports urinary α-ZEL concentrations (medians ~1.73–2.16 µg/L, max 48.9 µg/L) but no half-life, rate constant, clearance, partition coefficient, or kinetic model for alpha-zearalenol. |
| popPK | Pallarés_2022 | irrelevant | 0 | 0 | α-ZOL was not detected in any human urine sample; the paper reports only exposure concentrations and risk estimates (PDIs, MoE) with no kinetic parameters for α-ZOL. |
| popPK | Qu_2024 | relevant | 5 | 3 | Toxicokinetic parameters (T1/2, Vd, Cl, AUC) are reported but belong to the parent ZEN; alpha-zearalenol appears only as its measured metabolite with excretion kinetics shown in figures not provided, with no numeric alpha-ZOL values in the evidence. |
| popPK | Schmidt_2021 | irrelevant | 0 | 0 | This is an analytical method development and human biomonitoring exposure study for mycotoxins; α-ZEL is only an analyte, with no kinetic parameters (no half-life, clearance, Vd, rate constants, etc.), and no numeric α-ZEL toxicokinetic values appear in the evidence. |
| popPK | Slobodchikova_2018 | irrelevant | 0 | 0 | This is an analytical LC-MS method validation for mycotoxin quantitation in human plasma; α-ZOL appears only as an analyte with validation metrics, with no kinetic parameters of any kind. |
| popPK | Solfrizzo_2011 | irrelevant | 1 | 2 | Analytical LC-MS/MS method measuring urinary biomarker concentrations (human and pig) with recoveries and detection ranges, but no toxicokinetic parameters (half-life, clearance, rate constants) for alpha-zearalenol; the concentrations presented are exposure biomarkers, not kinetic parameters. |
| popPK | Wallin_2015 | irrelevant | 0 | 0 | Exposure/biomonitoring study reporting urinary concentrations and diet associations, with no kinetic parameters for α-zearalenol. |
| popPK | Wang_2022 | relevant | 5 | 2 | ADME study of ZEN in minipigs where α-ZOL is the main metabolite so its kinetic behaviour is in scope, but the evidence shows only the abstract and no actual numeric kinetic values (those likely live in figures/tables not provided). |
| popPK | Yang_2020 | relevant | 4 | 2 | Toxicokinetics of α-ZEL is the paper's subject (rats; iv/oral; microsome biotransformation with CYP phenotyping), but the abstract gives no numeric kinetic parameters and plasma levels were below LOQ, so any values likely reside in figures/supplementary material not provided. |
| popPK | Zhou_2026 | irrelevant | 1 | 1 | Urinary biomonitoring exposure study reporting concentrations and intake/risk estimates only, with no kinetic parameters for alpha-zearalenol. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Balpha_zearalenol%5D&body=Drug%3A%20alpha_zearalenol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_alpha_zearalenol/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-15 13:48 UTC</sub>
