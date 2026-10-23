<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G04B&quot;,&quot;href&quot;:&quot;atc/G04B.md&quot;},{&quot;label&quot;:&quot;tolterodine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tolterodine_Sano2023_reference&quot;,&quot;label&quot;:&quot;Sano_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tolterodine/Tolterodine_Sano2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# tolterodine

- **generic name:** tolterodine
- **ATC codes:** `G04BD07`
- **DrugBank:** [DB01036](https://go.drugbank.com/drugs/DB01036) · **PubChem:** [CID 443879](https://pubchem.ncbi.nlm.nih.gov/compound/443879)
- **molar mass:** 325.4876 g/mol (C22H31NO) — DrugBank
- **groups:** approved, investigational

## About

Tolterodine is a muscarinic antagonist used to treat urinary incontinence and bladder disease. It is an approved drug for urinary frequency and incontinence, and is widely used for overactive bladder conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q424312](https://www.wikidata.org/wiki/Q424312) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| 5-hydroxymethyl tolterodine | metabolite | 341.495 | C22H31NO2 | PubChem | [9819382](https://pubchem.ncbi.nlm.nih.gov/compound/9819382) | Sano_2023 |
| fesoterodine | metabolite | 411.586 | C26H37NO3 | PubChem | [6918558](https://pubchem.ncbi.nlm.nih.gov/compound/6918558) | Sano_2023 |

## Start here

> **Sano_2023_reference** — <span class="pk-badge pk-badge--green">Reproduces with caveats</span> pediatric patients with neurogenic detrusor overactivity, n = 142. [Run it in the simulator](drugs/drug_tolterodine/Tolterodine_Sano2023_reference.md?tab=Simulation) · [record](drugs/drug_tolterodine/Tolterodine_Sano2023_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Reproduces with caveats" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces with caveats</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Sano_2023_reference](drugs/drug_tolterodine/Tolterodine_Sano2023_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 (+5 cov.) | Sano Y et al., Population Pharmacokinetic and Pharmaco…, European journal of drug me… (2023) | [10.1007/s13318-023-00818-8](https://doi.org/10.1007/s13318-023-00818-8) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">Reproduces with caveats</span> | [Sano_2023_MCC](drugs/drug_tolterodine/pd_Sano_2023_MCC.md) | maximum cystometric capacity ← 5-hydroxymethyl tolterodine · direct Emax (saturable) effect | model (no simulator) | Sano Y et al., Population Pharmacokinetic and Pharmaco…, European journal of drug me… (2023) | [10.1007/s13318-023-00818-8](https://doi.org/10.1007/s13318-023-00818-8) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Besson_2015_ASH](drugs/drug_tolterodine/pd_Besson_2015_ASH.md) | Area of secondary hyperalgesia biomarker turnover ← tolterodine | — | Besson M et al., GABAergic modulation in central sensiti…, Pain (2015) | [10.1097/01.j.pain.0000460331.33385.e8](https://doi.org/10.1097/01.j.pain.0000460331.33385.e8) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Besson_2015_Sedation](drugs/drug_tolterodine/pd_Besson_2015_Sedation.md) | Sedation biomarker turnover ← tolterodine | — | Besson M et al., GABAergic modulation in central sensiti…, Pain (2015) | [10.1097/01.j.pain.0000460331.33385.e8](https://doi.org/10.1097/01.j.pain.0000460331.33385.e8) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Sweeney_2010_QTc](drugs/drug_tolterodine/pd_Sweeney_2010_QTc.md) | QTc interval ← tolterodine · direct linear effect | — | Sweeney KR et al., Exposure-response modeling and clinical…, Drug discoveries & therapeu… (2010) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:15 | 2:59 | 1/0/0 | 1/1/1 | 0/0/0 | 139,891/10,681 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Oishi_2014.pdf` | Oishi M et al., Population pharmacokinetics of the 5-hy…, Journal of clinical pharmac… (2014) | popPK | 10 | [10.1002/jcph.274](https://doi.org/10.1002/jcph.274) | [24619889](https://pubmed.ncbi.nlm.nih.gov/24619889) | The paper reports population PK parameters for 5-hydroxymethyl tolterodine (5-HMT), which is the active metabolite formed from fesoterodine (a prodrug of tolterodine), and provides specific quantitative values for the impact of covariates on apparent oral clearance (CL/F). |
| `Idkaidek_2016.pdf` | Idkaidek N et al., Saliva versus Plasma Relative Bioavaila…, Drug research (2016) | popPK | 5 | [10.1055/s-0035-1569442](https://doi.org/10.1055/s-0035-1569442) | [27011385](https://pubmed.ncbi.nlm.nih.gov/27011385) | The study reports PK parameters (AUC, Cmax, Tmax) for tolterodine, but the specific numeric values for clearance, volume, or absolute bioavailability are not explicitly listed in the provided text, only correlation coefficients and ratios. |

<sub>queue written 2026-10-07T09:12:42.651922+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Besson_2015 | irrelevant | 0 | 0 | Tolterodine is used only as an active placebo/control agent in a study of GABAergic modulators, and no pharmacokinetic parameters for tolterodine are reported. |
| popPK | Choppin_2001 | irrelevant | 0 | 0 | The study is a pharmacological characterization of muscarinic receptors in mouse bladder and reports affinity/antagonist constants (pKB) for tolterodine, but no pharmacokinetic disposition parameters (CL, V, etc.) for tolterodine. |
| popPK | Choppin_2001_2 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of muscarinic receptors in dog tissues and does not report pharmacokinetic parameters for tolterodine. |
| popPK | Gupta_2009 | irrelevant | 0 | 0 | Tolterodine is used as an antagonist in an in-vitro mechanistic study of calcium signaling, not to report pharmacokinetic parameters. |
| popPK | Idkaidek_2016 | relevant | 5 | 1 | The study reports PK parameters (AUC, Cmax, Tmax) for tolterodine, but the specific numeric values for clearance, volume, or absolute bioavailability are not explicitly listed in the provided text, only correlation coefficients and ratios. |
| popPK | Idkaidek_2017 | relevant | 6 | 3 | The paper reports pharmacokinetic parameters (AUC, Cmax, ratios) for tolterodine in humans, but the specific numeric values are located in Tables 2, 3, and 4 which are not fully present in the provided evidence (only fragments of Table 2 are visible). |
| popPK | Kitta_2023 | irrelevant | 4 | 0 | The study is a clinical trial for fesoterodine (a different drug), and while it mentions PK of its metabolite 5-HMT, no numeric parameter values are provided in the text. |
| popPK | Novotna_2014 | irrelevant | 0 | 0 | The study examines in vitro receptor binding and reporter gene activity (AhR, GR, PXR) of tolterodine, providing no pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Oishi_2014 | relevant | 10 | 3 | The paper reports population PK parameters for 5-hydroxymethyl tolterodine (5-HMT), which is the active metabolite formed from fesoterodine (a prodrug of tolterodine), and provides specific quantitative values for the impact of covariates on apparent oral clearance (CL/F). |
| popPK | Seo_2020 | irrelevant | 0 | 0 | The study investigates the mechanism of tolterodine on potassium channels in rabbit smooth muscle cells using patch-clamp (in vitro/physiological), reporting channel kinetics (IC50, rate constants) rather than pharmacokinetic parameters. |
| popPK | Sweeney_2010 | irrelevant | 4 | 0 | The paper reports exposure-response modeling for QT interval effects (pharmacodynamics), not pharmacokinetic disposition parameters (CL, V, etc.) for tolterodine, and no PK numeric values are present in the evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 09:12 UTC</sub>
