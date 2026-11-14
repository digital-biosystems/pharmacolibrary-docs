<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Triflupromazine&quot;}]"></div>

# Triflupromazine

- **generic name:** Triflupromazine
- **T3DB:** [T3D2813](http://www.t3db.ca/toxins/T3D2813) · **DrugBank:** [DB00508](https://go.drugbank.com/drugs/DB00508) · **PubChem:** [CID 5568](https://pubchem.ncbi.nlm.nih.gov/compound/5568)
- **groups:** approved, vet_approved

## About

Triflupromazine is only found in individuals that have used or taken this drug. It is a phenothiazine used as an antipsychotic agent and as an antiemetic. Triflupromazine binds to the dopamine D1 and dopamine D2 receptors and inhibits their activity. …

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** absorption may be erratic and peak plasma concentrations show large interindividual differences.
- **Sources and uses:** Used mainly in the management of psychoses. Also used to control nausea and vomiting.
- **Mechanism of toxicity:** Triflupromazine binds to the dopamine D1 and dopamine D2 receptors and inhibits their activity. The mechanism of the anti-emetic effect is due predominantly to blockage of the dopamine D2 neurotransmitter receptors in the chemoreceptor trigger zone (CTZ) and vomiting centre. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2813">T3DB T3D2813</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 146-54-3 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:9711">ChEBI 9711</a></small></p>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Carlo_1986_DNA_frag](drugs/toxin_triflupromazine/pd_Carlo_1986_DNA_frag.md) | DNA fragmentation · model not identified | — | Carlo P et al., Lack of DNA fragmentation in rats treat…, Arzneimittel-Forschung (1986) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=triflupromazine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| distribution | placenta | `ABCB1` inhibitor | DrugBank actor |
| distribution | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | blood | `BCHE` inhibitor | DrugBank actor |
| metabolism | liver | `BCHE` inhibitor | DrugBank actor |
| excretion | kidney | `ABCB1` inhibitor | DrugBank actor |
| excretion | liver | `ABCB1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CHRM1 (target), CHRM2 (target), DRD1 (target), DRD2 (target), HTR2B (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-13 07:54 | 3:20 | 0/0/0 | 0/1/0 | 0/0/0 | 103,265/3,392 | einfracz / qwen3.8-flash-next | 3 | 1/2 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 22 matched, 22 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kitamura_1999.pdf` | Kitamura K et al., Determination of the partition coeffici…, Talanta (1999) | popPK | 7 | [10.1016/s0039-9140(98)00384-1](https://doi.org/10.1016/s0039-9140(98)00384-1) | [18967595](https://pubmed.ncbi.nlm.nih.gov/18967595) | The paper reports a quantitative partition coefficient between phosphatidylcholine vesicles and water, which is a valid toxicokinetic parameter (partitioning) for triflupromazine, though in an in vitro/lipid model context. |

<sub>queue written 2026-11-13 07:54 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Asra_2026 | irrelevant | 0 | 0 | The paper focuses on electrochemical synthesis and cyclic voltammetry of phenothiazine metabolites, reporting electrochemical parameters like potentials and Faradaic efficiencies, with no toxicokinetic parameters (e.g., half-life, clearance, Vd) for triflupromazine or any substance. |
| popPK | Carlo_1986 | irrelevant | 0 | 0 | The study focuses on DNA damage and genotoxicity, reporting no quantitative toxicokinetic parameters such as half-lives, clearance, or partition coefficients. |
| popPK | Cheema_2007 | irrelevant | 0 | 0 | The paper reports thermodynamic parameters for protein unfolding (myoglobin) upon drug binding, not toxicokinetic parameters for triflupromazine disposition. |
| popPK | Cheema_2008 | irrelevant | 0 | 0 | The paper reports thermodynamic binding parameters (enthalpy, Gibbs energy, stoichiometry) for drug-protein interactions, which are not toxicokinetic parameters like clearance, volume of distribution, or elimination rate constants. |
| popPK | Dasgupta_2010 | irrelevant | 0 | 0 | The paper focuses on the antibacterial synergism of lacidipine; triflupromazine appears only as a non-antibiotic agent in combination studies, with no toxicokinetic parameters reported. |
| popPK | Dastidar_2004 | irrelevant | 1 | 0 | The paper reports MICs and in vivo antibacterial efficacy in mice, not toxicokinetic parameters like half-life or clearance. |
| popPK | Kitamura_2014 | irrelevant | 3 | 2 | The paper reports in vitro protein binding constants (K) for triflupromazine binding to human serum albumin in buffer, which are not in vivo toxicokinetic parameters like half-life, clearance, or volume of distribution. |
| popPK | Peltenburg_2016 | irrelevant | 1 | 5 | The paper reports analytical fiber-water distribution coefficients (Dfw) for triflupromazine, which are physicochemical properties, not toxicokinetic parameters. |
| popPK | Pichlmayr_1981 | irrelevant | 0 | 0 | The paper reports qualitative EEG effects of triflupromazine but contains no quantitative toxicokinetic parameters such as half-life, clearance, or volume of distribution. |
| popPK | Saar_2012 | irrelevant | 0 | 0 | The paper investigates the chemical stability of triflupromazine in stored blood samples, reporting degradation percentages rather than physiological toxicokinetic parameters like clearance, volume of distribution, or biological half-life. |
| popPK | Saller_1985 | irrelevant | 0 | 0 | The paper is a clinical efficacy and risk study comparing antiemetics; it reports no toxicokinetic parameters (such as half-life, clearance, or volume of distribution) for triflupromazine. |
| popPK | Shibanoki_1987 | irrelevant | 3 | 0 | The paper mentions that triflupromazine's elimination rate is faster than E-0663, but provides no quantitative kinetic parameters (e.g., half-lives, rate constants, clearance values) for triflupromazine in the evidence text. |
| popPK | Sturgeon_1981 | irrelevant | 0 | 0 | The study reports behavioral effects (locomotion, stereotyped behaviors) of triflupromazine pretreatment in rats but provides no quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | Takegami_2002 | irrelevant | 2 | 1 | The paper reports partition coefficients of triflupromazine metabolites into artificial lipid vesicles (in vitro physical chemistry), not physiological toxicokinetic parameters like clearance or half-life. |
| popPK | Vesenbeckh_2016 | irrelevant | 0 | 0 | The paper reports antimicrobial MIC values (pharmacodynamics) for *Mycobacterium tuberculosis*, not toxicokinetic parameters like half-life, clearance, or volume of distribution. |
| popPK | WENTZLER_1962 | irrelevant | 0 | 0 | no_text gate: only 113 chars of text extracted (&lt; 400) |
| popPK | Warchal_2020 | irrelevant | 0 | 0 | The paper describes in vitro phenotypic screening of breast cancer cell lines and transcriptomic analysis, reporting no toxicokinetic parameters such as half-lives, clearance, or partition coefficients for triflupromazine. |
| PGx | Warchal_2020 | not_relevant | 1 | 0 | The paper reports on phenotypic screening and gene expression changes (PD) in breast cancer cell lines, but does not report pharmacogenomic effects of specific human gene variants on triflupromazine PK or PD parameters. |
| popPK | Wu_2012 | irrelevant | 0 | 0 | The paper reports on the pharmacodynamic efficacy (behavioral inhibition of withdrawal jumps) of triflupromazine in mice but contains no quantitative toxicokinetic parameters such as half-lives, clearance, or tissue partition coefficients. |
| popPK | YAMAUCHI_1963 | irrelevant | 0 | 0 | no_text gate: only 94 chars of text extracted (&lt; 400) |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btriflupromazine%5D&body=Drug%3A%20triflupromazine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_triflupromazine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
