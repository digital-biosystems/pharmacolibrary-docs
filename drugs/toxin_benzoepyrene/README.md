<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Benzo[e]pyrene&quot;}]"></div>

# Benzo[e]pyrene

- **generic name:** Benzo[e]pyrene
- **T3DB:** [T3D0226](http://www.t3db.ca/toxins/T3D0226) · **PubChem:** [CID 9128](https://pubchem.ncbi.nlm.nih.gov/compound/9128)

## About

Benzo[e]pyrene is one of over 100 different polycyclic aromatic hydrocarbons (PAHs). PAHs are chemicals that are formed during the incomplete burning of organic substances, such as fossil fuels. They are usually found as a mixture containing two or more of these compounds.

- **Category:** Industrial/Workplace Toxin, Pollutant, Food Toxin, Natural Toxin
- **Route of exposure:** oral, inhalation
- **Sources and uses:** PAHs are released into the environment via the combustion of fossil fuels, coke oven emissions and vehicle exhausts, as well as naturally from forest fires and volcanic eruptions. PAHs from these sources may contaminate nearly water systems. …
- **Mechanism of toxicity:** The ability of PAH's to bind to blood proteins such as albumin allows them to be transported throughout the body. Many PAH's induce the expression of cytochrome P450 enzymes, especially CYP1A1, CYP1A2, and CYP1B1, by binding to the aryl hydrocarbon receptor or glycine N-methyltransferase protein. …
- **Health effects:** PAHs are carcinogens and have been associated with the increased risk of skin, respiratory tract, bladder, stomach, and kidney cancers. They may also cause reproductive effects and depress the immune system.
- **Carcinogenicity:** IARC group 3, not classifiable as to its carcinogenicity to humans.
- **Treatment:** There is no known antidote for PAHs. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D0226">T3DB T3D0226</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 192-97-2 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:34567">ChEBI 34567</a></small></p>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-14 18:22 | 7:11 | 0/0/0 | 0/0/0 | 0/0/0 | 231,126/20,434 | ollama / glm-5.3-flash | 2 | 1/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 39 matched, 39 returned
- **screened:** 4  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Törnquist_1985.pdf` | Törnquist S et al., Investigation of absorption, metabolism…, Chemico-biological interact… (1985) | popPK | 9 | [10.1016/s0009-2797(85)80162-9](https://doi.org/10.1016/s0009-2797(85)80162-9) | [4028288](https://pubmed.ncbi.nlm.nih.gov/4028288) | kinetic rate constants (appearance rate constant, two-compartment elimination exponents) for benzo[a]pyrene given directly in abstract with numeric values. |
| `Bevan_1988.pdf` | Bevan DR et al., Compartmental analysis of the dispositi…, Carcinogenesis (1988) | popPK | 8 | [10.1093/carcin/9.11.2027](https://doi.org/10.1093/carcin/9.11.2027) | [3180340](https://pubmed.ncbi.nlm.nih.gov/3180340) | A compartmental model of B[a]P disposition with transfer rate constants in rats is directly relevant, but the abstract only says rate constants were obtained — no numeric values appear, so the parameters likely live in tables/figures not provided. |
| `Saunders_2020.pdf` | Saunders LJ et al., In vitro-in vivo extrapolation of hepat…, Aquatic toxicology (Amsterd… (2020) | popPK | 8 | [10.1016/j.aquatox.2020.105629](https://doi.org/10.1016/j.aquatox.2020.105629) | [33002683](https://pubmed.ncbi.nlm.nih.gov/33002683) | Reports in vitro intrinsic clearance rates and whole-body biotransformation rate constants (kMET) for benzo(a)pyrene in trout liver and GIT S9 fractions, but the actual numeric clearance/kMET values for BAP appear to live in tables or figures not included — only fold-comparisons (1.2–1.4×) are given. |
| `Schuler_2003.pdf` | Schuler LJ et al., Toxicokinetics of sediment-sorbed benzo…, Environmental toxicology an… (2003) | popPK | 7 |  | [12558178](https://pubmed.ncbi.nlm.nih.gov/12558178) | Toxicokinetic rate constants (k(s), k(d)) and BAFs for BaP in invertebrates are reported, though some tabulated values may be in figures/tables not shown. |
| `Aklillu_2005.pdf` | Aklillu E et al., Characterization of common CYP1B1 varia…, Cancer research (2005) | popPK | 6 | [10.1158/0008-5472.CAN-05-0113](https://doi.org/10.1158/0008-5472.CAN-05-0113) | [15958554](https://pubmed.ncbi.nlm.nih.gov/15958554) | In vitro kinetic parameters (Vmax/Km, intrinsic clearance) for benzo[a]pyrene metabolism by CYP1B1 variants are reported, but the actual numeric values for individual isoforms (Vmax, Km) appear only in tables/figures not included in the evidence. |

<sub>queue written 2026-11-14 18:22 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aklillu_2005 | relevant | 6 | 3 | In vitro kinetic parameters (Vmax/Km, intrinsic clearance) for benzo[a]pyrene metabolism by CYP1B1 variants are reported, but the actual numeric values for individual isoforms (Vmax, Km) appear only in tables/figures not included in the evidence. |
| popPK | Bend_1984 | irrelevant | 1 | 2 | Benzo[a]pyrene appears only as a catalytic substrate for measuring AHH enzyme activity in fish liver microsomes, not as the subject of any disposition, half-life, partitioning or kinetic parameter; no numeric parameter values are shown in this abstract-only evidence. |
| popPK | Bevan_1988 | relevant | 8 | 2 | A compartmental model of B[a]P disposition with transfer rate constants in rats is directly relevant, but the abstract only says rate constants were obtained — no numeric values appear, so the parameters likely live in tables/figures not provided. |
| popPK | Brown_1996 | irrelevant | 1 | 2 | Analytical chemistry method (CE separation of PAHs); the partition coefficients are analyte–cyclodextrin separation constants, not toxicokinetic parameters for benzo[e]pyrene in a living system. |
| popPK | Commoner_1978 | irrelevant | 0 | 0 | Benzo[e]pyrene appears only as an identified constituent of air particulates via mass spectrometry; no kinetic parameters of any kind are reported. |
| popPK | Crump_2021 | irrelevant | 2 | 2 | An avian embryo toxicity study (LD50, NOEL) where BaP was measured but not detected in liver; no kinetic parameters (half-life, rate constants, partition coefficients) are reported, and liver concentration values rely on supplemental tables not provided. |
| popPK | Cwalina_2023 | irrelevant | 0 | 0 | This is an environmental biomonitoring/exposure study measuring PAH concentrations in moss, with no toxicokinetic parameters for benzo(e)pyrene. |
| popPK | Deutsch-Wenzel_1983 | irrelevant | 0 | 0 | Benzo[e]pyrene appears only as a non-carcinogenic comparator in a rat carcinogenicity dose-response study, with no toxicokinetic parameters (no half-life, rate constants, or disposition model). |
| popPK | Di_2017 | irrelevant | 1 | 0 | Biomarker/outcome study in mussels with no quantitative toxicokinetic parameters (the "clearance rate" is a physiological measure, not a kinetic parameter). |
| popPK | Ebert_2005 | irrelevant | 3 | 2 | In vitro Caco-2 study on BP metabolite formation/transport with no numeric kinetic parameter values appearing in the evidence. |
| popPK | Fueldner_2018 | irrelevant | 0 | 0 | In vitro cytokine expression study in murine macrophages with no kinetic parameters for benzo(a)pyrene. |
| popPK | Greb_1980 | irrelevant | 1 | 0 | A cell-transformation genotoxicity assay with only transformation rates, not toxicokinetic parameters for benzo(e)pyrene. |
| popPK | Hahon_1988 | irrelevant | 3 | 1 | This is an in vitro bioactivation/interferon-inhibition study using rat liver S9; any kinetic parameters (e.g., Km/Vmax) are not given numerically in the evidence, and no whole-body toxicokinetics are reported. |
| popPK | Huang_2023 | irrelevant | 1 | 0 | A mechanistic toxicology study of BaP in mice/H9C2 cells with protein expression and pyroptosis endpoints, but no toxicokinetic parameters and no numeric kinetic values in the evidence. |
| popPK | Jaeschke_1987 | irrelevant | 0 | 0 | Benzo[a]pyrene appears only as a pretreatment/comparator for liposome hepatoprotection; all kinetic parameters (lipid uptake, retention) belong to phosphatidyl choline liposomes, not benzo[a]pyrene. |
| popPK | Kennedy_2015 | irrelevant | 2 | 1 | The kinetic parameters (half-life, bile elimination, pharmacokinetic model) apply to estradiol/testosterone, not to benzo[a]pyrene's own disposition; B[a]P is only the treatment, and no numeric values appear in the evidence (likely in figures/supplements). |
| popPK | Marrucci_2013 | irrelevant | 0 | 0 | Environmental monitoring of PAHs in seawater via SPMDs; no kinetic parameters for benzoepyrene. |
| popPK | Mescher_2019 | irrelevant | 2 | 1 | Benzo[a]pyrene is only an AHR agonist used to induce CYP activity; kinetic parameters (clearance, metabolism rates) belong to imiquimod, not BaP. |
| popPK | Mishra_2024 | irrelevant | 0 | 0 | Benzopyrene is only used as a lung cancer inducer; all pharmacokinetic/parametric data concern the drugs gemcitabine and EGCG, not benzo[e]pyrene. |
| popPK | Nolte_1976 | irrelevant | 0 | 0 | The paper is about mathematical curve-fitting for radioimmunoassays and contains no toxicokinetic parameters for benzo[a]pyrene or any substance. |
| popPK | Richter-Reichhelm_1985 | irrelevant | 1 | 2 | An in vitro morphological toxicity study with no kinetic parameters for benzo(e)pyrene; only exposure concentrations mentioned, no PK values. |
| popPK | Saunders_2020 | relevant | 8 | 4 | Reports in vitro intrinsic clearance rates and whole-body biotransformation rate constants (kMET) for benzo(a)pyrene in trout liver and GIT S9 fractions, but the actual numeric clearance/kMET values for BAP appear to live in tables or figures not included — only fold-comparisons (1.2–1.4×) are given. |
| popPK | Schlipköter_1981 | irrelevant | 0 | 0 | Review-style discussion mentioning benzo(a)pyrene metabolism qualitatively; no numeric kinetic parameters for benzo(a)pyrene. |
| popPK | Setia_2025 | irrelevant | 0 | 0 | Benzo(a)pyrene appears only as a lung cancer induction agent in mice; all kinetic parameters relate to paclitaxel micelles, not benzo(a)pyrene. |
| popPK | Sharma_2009 | irrelevant | 0 | 0 | Environmental biomonitoring of PAH concentrations in plant leaves with no kinetic parameters; benzo(e)pyrene appears only as a measured pollutant. |
| popPK | Steele_1996 | irrelevant | 0 | 0 | Chemoprevention assay study with no toxicokinetic parameters for benzo(a)pyrene, only its use as a carcinogen. |
| popPK | Tore_2026 | irrelevant | 0 | 0 | Exposure/epidemiological outcome study with no kinetic parameters; benzo[e]pyrene appears only as a co-exposure marker. |
| popPK | Törnqvist_1992 | irrelevant | 1 | 0 | A risk-assessment overview citing BaP only as a PAH exposure index; no kinetic parameters for benzo(a)pyrene itself are reported. |
| popPK | Uziel_1987 | irrelevant | 1 | 0 | Benzo(e)pyrene is only a test chemical in a cell-culture cytotoxicity screen with no kinetic parameters; concentrations/dose-response details are not provided numerically. |
| popPK | Wang_2009 | irrelevant | 1 | 0 | A review of CYP1A2 substrate/inhibitor properties mentioning benzo[a]pyrene only qualitatively as a procarcinogen, with no kinetic parameters for it. |
| popPK | Zhang_2003 | irrelevant | 2 | 1 | This is an multimedia fate/environmental transport model of benzo[a]pyrene in the Great Lakes environment, not toxicokinetic parameters of the substance itself in humans or animals. |
| popPK | Zhang_2019 | irrelevant | 2 | 1 | Gene expression and ERND activity responses to B[a]P in mussel, with no quantitative toxicokinetic parameters for benzo[a]pyrene itself (no Kp, Km/Vmax, half-life, or model). |
| popPK | Zhou_2009 | irrelevant | 2 | 0 | Benzo[a]pyrene appears only as a listed example substrate of CYP1A2 in a review; no kinetic parameters for it are reported. |
| popPK | Zhou_2010 | irrelevant | 0 | 0 | A review of human CYP1A2 where benzo[a]pyrene is merely mentioned as an example substrate, with no toxicokinetic parameters and no numeric values present. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbenzoepyrene%5D&body=Drug%3A%20benzoepyrene%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_benzoepyrene/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
