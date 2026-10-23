<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;mercaptopurine&quot;}]"></div>

# mercaptopurine

- **generic name:** mercaptopurine
- **ATC codes:** `L01BB02`
- **DrugBank:** [DB01033](https://go.drugbank.com/drugs/DB01033) · **PubChem:** [CID 667490](https://pubchem.ncbi.nlm.nih.gov/compound/667490)
- **molar mass:** 152.177 g/mol (C5H4N4S) — DrugBank
- **groups:** approved, investigational

## About

Mercaptopurine is an antimetabolite anticancer drug used to treat lymphoid leukemias and related cancers such as lymphosarcoma. It is an approved medicine, listed among WHO essential medicines, and is authorised in the European Union for lymphoid leukemia.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418529](https://www.wikidata.org/wiki/Q418529) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| mercaptopurine (6-mercaptopurine) | parent | 152.177 | C5H4N4S | DrugBank | [667490](https://pubchem.ncbi.nlm.nih.gov/compound/667490) | Ding_1979, Hawwa_2008 |
| 6-methylmercaptopurine nucleotides | metabolite | 166.202 | C6H6N4S | PubChem | [5778](https://pubchem.ncbi.nlm.nih.gov/compound/5778) | Hawwa_2008 |
| 6-thioguanine nucleotides | metabolite | — (mass units only) | — | — | — | — |
| 8-hydroxymercaptopurine | metabolite | 168.174 | C5H4N4OS | PubChem | [3763117](https://pubchem.ncbi.nlm.nih.gov/compound/3763117) | Ding_1979 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="monkey" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Ding_1979_reference](drugs/drug_mercaptopurine/Mercaptopurine_Ding1979_reference.md) | — | general linear (no model) | 3 | Ding TL et al., Comparative bioavailability and pharmac…, Drug metabolism and disposi… (1979) | — |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Hawwa_2008_reference](drugs/drug_mercaptopurine/Mercaptopurine_Hawwa2008_reference.md) | — | general linear (no model) | 0 (+1 cov.) | Hawwa AF et al., Population pharmacokinetic and pharmaco…, British journal of clinical… (2008) | [10.1111/j.1365-2125.2008.03281.x](https://doi.org/10.1111/j.1365-2125.2008.03281.x) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Jost_2020_reference](drugs/drug_mercaptopurine/Mercaptopurine_Jost2020_reference.md) | — | general linear (no model) | 4 | Jost F et al., Model-Based Simulation of Maintenance T…, Frontiers in physiology (2020) | [10.3389/fphys.2020.00217](https://doi.org/10.3389/fphys.2020.00217) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Rosario_2017_2_reference](drugs/drug_mercaptopurine/Mercaptopurine_Rosario2017v2_reference.md) | — | 2-compartment (no model) | 3 | Rosario M et al., A Review of the Clinical Pharmacokineti…, Clinical pharmacokinetics (2017) | [10.1007/s40262-017-0546-0](https://doi.org/10.1007/s40262-017-0546-0) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Tsukamoto_2017_Cell_viability](drugs/drug_mercaptopurine/pd_Tsukamoto_2017_Cell_viability.md) | Cell viability biomarker turnover ← 6-mercaptopurine | — | Tsukamoto M et al., Quantitative Evaluation of Drug Resista…, International journal of mo… (2017) | [10.3390/ijms18071435](https://doi.org/10.3390/ijms18071435) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:55 | 3:43 | 0/4/0 | 0/1/0 | 0/0/0 | 244,094/15,353 | einfracz / qwen3.8-27b | 19 | 2/5 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 25 matched, 20 returned
- **screened:** 3  ·  **relevant:** 2
- **records:** 4  ·  extracted 0  ·  needs_review 0  ·  rejected 4  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Arun_2024.pdf` | Arun B et al., Bioequivalence study followed by model-…, Pediatric blood & cancer (2024) | popPK | 10 | [10.1002/pbc.30813](https://doi.org/10.1002/pbc.30813) | [38110844](https://pubmed.ncbi.nlm.nih.gov/38110844) | The paper describes a population pharmacokinetic (PopPK) model study for mercaptopurine, but no specific numeric parameter values (CL, V, etc.) are provided in the extracted evidence, only qualitative findings (47% higher bioavailability) and simulation results. |
| `Ding_1979.pdf` | Ding TL et al., Comparative bioavailability and pharmac…, Drug metabolism and disposi… (1979) | popPK | 10 | not captured | [43222](https://pubmed.ncbi.nlm.nih.gov/43222) | The abstract explicitly reports quantitative pharmacokinetic parameters (CLp, Vdss, half-life) for 6-mercaptopurine. |
| `Covell_1985.pdf` | Covell DG et al., Kinetic model for disposition of 6-merc…, The American journal of phy… (1985) | popPK | 9 | [10.1152/ajpregu.1985.248.2.R147](https://doi.org/10.1152/ajpregu.1985.248.2.R147) | [4038588](https://pubmed.ncbi.nlm.nih.gov/4038588) | The paper describes a compartmental pharmacokinetic model for 6-mercaptopurine in monkeys, but no specific numeric parameter values are provided in the evidence text. |
| `Wierzba_1983.pdf` | Wierzba K et al., The effect of glutathione on 6-mercapto…, Polish journal of pharmacol… (1983) | popPK | 8 | not captured | [6687157](https://pubmed.ncbi.nlm.nih.gov/6687157) | The study reports a compartmental model for mercaptopurine in rabbits, but no specific numeric PK parameter values (CL, V, t1/2, etc.) are provided in the extracted evidence. |
| `Hermann_1985.pdf` | Hermann T et al., Pharmacokinetics of elimination of 6-me…, Polish journal of pharmacol… (1985) | popPK | 6 | not captured | [3863097](https://pubmed.ncbi.nlm.nih.gov/3863097) | The paper reports pharmacokinetic parameters (elimination rate K, half-life) for 6-mercaptopurine, but no numeric values are present in the provided evidence. |
| `Klés_2003.pdf` | Klés V et al., Application of pharmacokinetic/pharmaco…, Journal of applied toxicolo… (2003) | popPK | 5 | [10.1002/jat.888](https://doi.org/10.1002/jat.888) | [12518338](https://pubmed.ncbi.nlm.nih.gov/12518338) | The study involves PK/PD modeling of mercaptopurine in mice but no specific numeric pharmacokinetic parameters (CL, V, etc.) are present in the provided evidence. |

<sub>queue written 2026-10-07T16:52:25.056351+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arun_2024 | relevant | 10 | 0 | The paper describes a population pharmacokinetic (PopPK) model study for mercaptopurine, but no specific numeric parameter values (CL, V, etc.) are provided in the extracted evidence, only qualitative findings (47% higher bioavailability) and simulation results. |
| popPK | Canal_1998 | irrelevant | 1 | 0 | The paper is a general review on dose individualization strategies that only briefly mentions mercaptopurine pharmacogenetics without providing any specific quantitative PK parameter values for the drug. |
| popPK | Covell_1985 | relevant | 9 | 0 | The paper describes a compartmental pharmacokinetic model for 6-mercaptopurine in monkeys, but no specific numeric parameter values are provided in the evidence text. |
| popPK | Gebhard_2023 | relevant | 8 | 4 | The study models 6-mercaptopurine PK/PD in humans and reports specific numeric values for ka, ke, and bioavailability in the text, though full volume/parameter tables are in supplementary material. |
| popPK | Hermann_1985 | relevant | 6 | 0 | The paper reports pharmacokinetic parameters (elimination rate K, half-life) for 6-mercaptopurine, but no numeric values are present in the provided evidence. |
| popPK | Iseki_1996 | irrelevant | 0 | 0 | The study investigates in-vitro membrane transport mechanisms of 6-mercaptopurine riboside, not the pharmacokinetic disposition parameters (CL, V, etc.) of mercaptopurine itself. |
| PD | Iseki_1996 | not_relevant | 0 | 0 | The paper investigates intestinal transport mechanisms (Km, Hill equation) of 6-mercaptopurine riboside in membrane vesicles, not systemic pharmacodynamics or exposure-response relationships. |
| popPK | Jost_2020 | relevant | 5 | 3 | The paper is a PK/PD simulation study that utilizes a published mercaptopurine PK model (Hawwa et al.) but does not derive new quantitative PK parameters (CL, V) from measured drug concentrations; only the fixed literature PK constants (ka, F) and fitted PD parameters (Base, slope, etc.) are explicitly reported. |
| popPK | Klés_2003 | relevant | 5 | 0 | The study involves PK/PD modeling of mercaptopurine in mice but no specific numeric pharmacokinetic parameters (CL, V, etc.) are present in the provided evidence. |
| popPK | Kobayashi_1993 | irrelevant | 1 | 0 | The paper is a review discussing pharmacodynamic models and mentions mercaptopurine as a subject of other models, but contains no original quantitative PK data or parameter values. |
| popPK | Lin_2025 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on synthesizing 6-mercaptopurine conjugates for antiviral activity, not a pharmacokinetic study, and reports no disposition parameters. |
| PD | Lin_2025 | not_relevant | 0 | 0 | The paper reports in vitro antiviral activity (EC50) for novel 6-chlorocoumarin conjugates, not pharmacodynamic or exposure-response data for mercaptopurine. |
| popPK | Meyer_1979 | irrelevant | 0 | 0 | This is an in vitro cytotoxicity study of prodrugs of thioinosinic acid, with mercaptopurine mentioned only as a comparator for time-course of cell kill, reporting no pharmacokinetic parameters. |
| popPK | Rosario_2017_2 | irrelevant | 0 | 0 | The paper is a pharmacokinetic study of vedolizumab, not mercaptopurine, which is only mentioned as a concomitant therapy. |
| popPK | Ruel_2022 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of transporter-mediated uptake and cytotoxicity, not a pharmacokinetic study reporting disposition parameters like clearance or volume of distribution. |
| popPK | Tanaka_1989 | irrelevant | 0 | 0 | The paper reports in vitro electrophysiological data (K0.5, Hill coefficient) for a mercaptopurine derivative on photoreceptor channels, not pharmacokinetic disposition parameters. |
| PD | Tanaka_1989 | not_relevant | 0 | 0 | The paper studies the electrophysiological effects of nucleotide derivatives on photoreceptor channels, not the pharmacodynamics of the drug mercaptopurine. |
| popPK | Tsukamoto_2017 | irrelevant | 0 | 0 | The paper is an in-vitro cell biology study evaluating drug resistance (EC50) via ABC transporters, not a pharmacokinetic study reporting disposition parameters like clearance or volume for mercaptopurine. |
| popPK | Tsukamoto_2019 | irrelevant | 0 | 0 | The study is an in-vitro cell line experiment measuring drug resistance (EC50) to assess the effect of a transporter SNP, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PD | Tsukamoto_2019 | not_relevant | 3 | 2 | The paper reports EC50 values for 6-mercaptopurine in an in vitro cell line study (genetic resistance profile), which is not a pharmacokinetic/pharmacodynamic (exposure-response) relationship in a biological system. |
| popPK | Vitale_2009 | irrelevant | 0 | 0 | The paper is a study on synthetic antiviral agents where mercaptopurine is used only as a reference drug for cytotoxicity comparisons, providing no pharmacokinetic parameters for mercaptopurine. |
| PD | Vitale_2009 | not_relevant | 0 | 0 | The paper reports in vitro antiviral and cytotoxicity data for new benzimidazole compounds, using mercaptopurine only as a reference drug without providing specific numeric PD parameters or exposure-response analysis for mercaptopurine itself. |
| popPK | Wierzba_1983 | relevant | 8 | 0 | The study reports a compartmental model for mercaptopurine in rabbits, but no specific numeric PK parameter values (CL, V, t1/2, etc.) are provided in the extracted evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 16:52 UTC</sub>
