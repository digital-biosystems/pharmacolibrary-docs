<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Cigarette toxins&quot;,&quot;href&quot;:&quot;toxins/CIG.md&quot;},{&quot;label&quot;:&quot;n-Nitrosodi-n-propylamine&quot;}]"></div>

# n-Nitrosodi-n-propylamine

- **generic name:** n-Nitrosodi-n-propylamine
- **T3DB:** [T3D0112](http://www.t3db.ca/toxins/T3D0112) · **PubChem:** [CID 12130](https://pubchem.ncbi.nlm.nih.gov/compound/12130)

## About

N-Nitrosodi-n-propylamine is a chemical produced by industry in small amounts for research. Small amounts of n-nitrosodi-n-propylamine are also produced as a side reaction during some manufacturing processes, as a contaminant in some weed killers, and during the manufacture of some rubber products. It is one ingredient of cigarette.

- **Category:** Cigarette Toxin, Industrial/Workplace Toxin, Pollutant, Synthetic Toxin
- **Route of exposure:** oral, inhalation, dermal.
- **Sources and uses:** Small amounts of n-nitrosodi-n-propylamine are also produced as a side reaction during some manufacturing processes, as a contaminant in some weed killers, and during the manufacture of some rubber products.
- **Mechanism of toxicity:** Reactive metabolites of n-nitrosodi-n-propylamine are believed to form adducts with DNA, resulting in carcinogenic effects.
- **Health effects:** High levels of n-nitrosodi-n-propylamine may damage the liver, lung, stomach, kidneys, and heart. n-Nitrosodi-n-propylamine is also a likely carcinogen.
- **Carcinogenicity:** IARC group 2B, possibly carcinogenic to humans.
- **Minimal risk levels (ATSDR):** Acute Oral: 0.095 mg/kg/day
- **Acute toxicity:** LD50: 480 mg/kg (Oral, Rat)
LD50: 487 mg/kg (Subcutaneous, Rat)

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D0112">T3DB T3D0112</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 621-64-7</small></p>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-12 21:58 | 2:44 | 0/0/0 | 0/0/0 | 0/0/0 | 70,488/2,320 | einfracz / qwen3.8-flash-next | 3 | 2/1 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 14 matched, 15 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brambilla_1987 | irrelevant | 1 | 0 | The paper reports toxicodynamic endpoints (DNA fragmentation dose-response) and explicitly concludes linearity implies no nonlinearity in pharmacokinetics, but provides no actual kinetic parameters such as half-lives, clearances, or partition coefficients. |
| PGx | Duarte_2005 | not_relevant | 2 | 0 | The study focuses on the in vitro effect of cytochrome b5 co-expression on bioactivation (mutagenicity) in bacteria, not on human pharmacogenomic effects (gene variants/genotypes) on PK/PD parameters. |
| PGx | Duarte_2005_2 | not_relevant | 1 | 0 | The paper reports bacterial mutagenicity in engineered E. coli strains with knockout genes, which does not represent human pharmacokinetic or pharmacodynamic parameters in a pharmacogenomic context. |
| PGx | Duarte_2007 | not_relevant | 1 | 2 | The study investigates the effect of cytochrome b5 species (human vs. rat) on in vitro CYP enzyme activity (bioactivation), not the effect of human gene variants/genotypes on pharmacokinetic or pharmacodynamic parameters in a clinical or pharmacogenomic context. |
| popPK | Guttenplan_1987 | irrelevant | 1 | 0 | The paper discusses qualitative structure-activity relationships and relative rates/mutagenic efficiencies, but provides no specific quantitative toxicokinetic parameters (e.g., half-lives, clearance, Km) for n-nitrosodi_n_propylamine in the extracted evidence. |
| popPK | Hirose_1999 | irrelevant | 0 | 0 | The paper discusses carcinogenesis promotion by phytic acid and gamma-oryzanol using nitrosamine initiators, reporting no quantitative toxicokinetic parameters for n-nitrosodi-n-propylamine. |
| popPK | Ito_1998 | irrelevant | 0 | 0 | The paper is a carcinogenicity bioassay focusing on preneoplastic lesions (GST-P foci) and tumor incidence, reporting no toxicokinetic parameters for n-nitrosodi-n-propylamine (which is not even studied, though a related nitrosamine DHPN is used as an initiator). |
| popPK | Ito_1998_2 | irrelevant | 0 | 0 | The evidence contains only metadata and extraction headers with no scientific text or data. |
| popPK | Itoh_1999 | irrelevant | 0 | 0 | The paper reports mutagenicity and clastogenicity endpoints (mutant frequencies, micronuclei) but does not measure or report any quantitative toxicokinetic parameters (e.g., clearance, volume of distribution, half-life, metabolism rates) for NDPA. |
| popPK | Mestankova_2016 | irrelevant | 1 | 1 | The paper reports environmental degradation kinetics and biological assay results (mutagenicity) for water treatment, not physiological toxicokinetic parameters like half-life or clearance in organisms. |
| popPK | Xu_2014 | irrelevant | 0 | 0 | The paper studies N-nitrosobis(2-hydroxypropyl)amine (DHPN) as an initiator in a carcinogenesis model, not N-nitrosodi-n-propylamine, and reports no toxicokinetic parameters for the substance in question. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bn_nitrosodi_n_propylamine%5D&body=Drug%3A%20n_nitrosodi_n_propylamine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_n_nitrosodi_n_propylamine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
