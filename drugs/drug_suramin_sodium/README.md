<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01C&quot;,&quot;href&quot;:&quot;atc/P01C.md&quot;},{&quot;label&quot;:&quot;suramin sodium&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SuraminSodium_Kosarek2006_reference&quot;,&quot;label&quot;:&quot;Kosarek_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_suramin_sodium/SuraminSodium_Kosarek2006_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Del_2023_vasoconstriction&quot;,&quot;label&quot;:&quot;Del_2023 \u00b7 vasoconstriction&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_suramin_sodium/pd_Del_2023_vasoconstriction.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# suramin sodium

- **generic name:** suramin sodium
- **ATC codes:** `P01CX02`
- **DrugBank:** [DB04786](https://go.drugbank.com/drugs/DB04786) · **PubChem:** [CID 5361](https://pubchem.ncbi.nlm.nih.gov/compound/5361)
- **molar mass:** 1297.28 g/mol (C51H40N6O23S6) — DrugBank
- **groups:** investigational

## About

Suramin is an antiprotozoal drug used against trypanosomiasis, and has also been studied as an antineoplastic and antinematodal agent. It is listed as investigational in DrugBank and has no European Union authorisation, though it appears on the WHO essential medicines list.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q425946](https://www.wikidata.org/wiki/Q425946) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| suramin (suramin_sodium) | parent | 1297.28 | C51H40N6O23S6 | DrugBank | [5361](https://pubchem.ncbi.nlm.nih.gov/compound/5361) | Kosarek_2006, Motzer_1992, Naviaux_2017, Scher_1992 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 20:05 | 9:35 | 1/3/0 | 4/1/1 | 0/0/0 | 441,757/29,256 | einfracz / qwen3.8-27b | 19 | 13/2 | 16/3 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Kosarek_2006_reference](drugs/drug_suramin_sodium/SuraminSodium_Kosarek2006_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Kosarek CE et al., Phase I evaluation of low-dose suramin…, Journal of veterinary inter… (2006) | [10.1892/0891-6640(2006)20[1172:pieols]2.0.co;2](https://doi.org/10.1892/0891-6640(2006)20[1172:pieols]2.0.co;2) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Motzer_1992_reference](drugs/drug_suramin_sodium/SuraminSodium_Motzer1992_reference.md) | — | 1-compartment (no model) | 4 | Motzer RJ et al., Phase II trial of suramin in patients w…, Cancer research (1992) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Naviaux_2017_reference](drugs/drug_suramin_sodium/SuraminSodium_Naviaux2017_reference.md) | — | 1-compartment (no model) | 1 | Naviaux RK et al., Low-dose suramin in autism spectrum dis…, Annals of clinical and tran… (2017) | [10.1002/acn3.424](https://doi.org/10.1002/acn3.424) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.154). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Scher_1992_reference](drugs/drug_suramin_sodium/SuraminSodium_Scher1992_reference.md) | — | 2-compartment (no model) | 5 | Scher HI et al., Use of adaptive control with feedback t…, Cancer research (1992) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 0.90).">in vitro</span> | [Atkins_2020_BPLF1_deubiquitinating_activity](drugs/drug_suramin_sodium/pd_Atkins_2020_BPLF1_deubiquitinating_activity.md) | BPLF1 deubiquitinating activity ← suramin · direct sigmoid Emax (Hill) effect | — | Atkins SL et al., Small molecule screening identifies inh…, Antiviral research (2020) | [10.1016/j.antiviral.2019.104649](https://doi.org/10.1016/j.antiviral.2019.104649) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bachmann_1999_I_CFTR](drugs/drug_suramin_sodium/pd_Bachmann_1999_I_CFTR.md) | I(CFTR) ← suramin · direct sigmoid Emax (Hill) effect | — | Bachmann A et al., Potent inhibition of the CFTR chloride…, Naunyn-Schmiedeberg's archi… (1999) | [10.1007/s002109900096](https://doi.org/10.1007/s002109900096) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">in vitro</span> | [Tan_2012_RISC_loading](drugs/drug_suramin_sodium/pd_Tan_2012_RISC_loading.md) | RISC loading biomarker turnover ← suramin | — | Tan GS et al., Small molecule inhibition of RISC loadi…, ACS chemical biology (2012) | [10.1021/cb200253h](https://doi.org/10.1021/cb200253h) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Vázquez-Cuevas_2010_MAPK](drugs/drug_suramin_sodium/pd_V_zquez_Cuevas_2010_MAPK.md) | p44 and p42 MAPK phosphorylation induced by UTP ← suramin · inhibition effect | — | Vázquez-Cuevas FG et al., Functional expression and intracellular…, Reproductive biology and en… (2010) | [10.1186/1477-7827-8-88](https://doi.org/10.1186/1477-7827-8-88) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Del_2023_vasoconstriction](drugs/drug_suramin_sodium/pd_Del_2023_vasoconstriction.md) | αβme-ATP-evoked vasoconstriction ← suramin · direct sigmoid Emax (Hill) effect | ▶ model + simulator | Del Carmen Gonzalez-Montelongo M et al., Neuropeptide Y: Direct vasoconstrictor…, Vascular pharmacology (2023) | [10.1016/j.vph.2023.107192](https://doi.org/10.1016/j.vph.2023.107192) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [Barajas-López_1993_inward_current](drugs/drug_suramin_sodium/pd_Barajas_L_pez_1993_inward_current.md) | inward current ← suramin_sodium · direct sigmoid Emax (Hill) effect | — | Barajas-López C et al., Suramin increases the efficacy of ATP t…, European journal of pharmac… (1993) | [10.1016/0014-2999(93)90631-q](https://doi.org/10.1016/0014-2999(93)90631-q) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=suramin_sodium).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ARSA (inhibitor), F2 (inhibitor), FSHR (target), HPSE (inhibitor), P2RY2 (target), PLA2G2A (inhibitor), PLA2G4A (inhibitor), RYR1 (target), SIRT5 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 672 matched, 115 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 1  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_8 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cooper_1992.pdf` | Cooper MR et al., Adaptive control with feedback strategi…, Clinical pharmacology and t… (1992) | popPK | 10 | [10.1038/clpt.1992.97](https://doi.org/10.1038/clpt.1992.97) | [1623689](https://pubmed.ncbi.nlm.nih.gov/1623689) | The abstract describes a three-compartment population pharmacokinetic model for suramin, but no specific numeric parameter values (CL, V, Q, ka, t1/2) are provided in the evidence text. |
| `Jodrell_1994.pdf` | Jodrell DI et al., Suramin: development of a population ph…, Journal of clinical oncolog… (1994) | popPK | 10 | [10.1200/JCO.1994.12.1.166](https://doi.org/10.1200/JCO.1994.12.1.166) | [8270974](https://pubmed.ncbi.nlm.nih.gov/8270974) | The study describes a population pharmacokinetic model for suramin in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract or evidence text. |
| `Kosarek_2006.pdf` | Kosarek CE et al., Phase I evaluation of low-dose suramin…, Journal of veterinary inter… (2006) | popPK | 10 | [10.1892/0891-6640(2006)20[1172:pieols]2.0.co;2](https://doi.org/10.1892/0891-6640(2006)20[1172:pieols]2.0.co;2) | [17063712](https://pubmed.ncbi.nlm.nih.gov/17063712) | The study reports quantitative population pharmacokinetic parameters (CL, V, half-lives) for suramin in dogs within the provided text. |
| `Piscitelli_1997.pdf` | Piscitelli SC et al., Pharmacometric analysis of the effect o…, Pharmacotherapy (1997) | popPK | 10 | not captured | [9165547](https://pubmed.ncbi.nlm.nih.gov/9165547) | The paper reports a population pharmacokinetic analysis of suramin in humans with specific numeric values for the effect of furosemide on clearance (36% decrease), but full parameter estimates are not explicitly listed in the provided text. |
| `Scher_1992.pdf` | Scher HI et al., Use of adaptive control with feedback t…, Cancer research (1992) | popPK | 10 | not captured | [1727387](https://pubmed.ncbi.nlm.nih.gov/1727387) | The abstract provides specific numeric values for population pharmacokinetic parameters (volume, half-lives) for suramin in humans. |
| `Fairlamb_1980.pdf` | Fairlamb AH et al., Uptake of the trypanocidal drug suramin…, Molecular and biochemical p… (1980) | popPK | 9 | [10.1016/0166-6851(80)90050-x](https://doi.org/10.1016/0166-6851(80)90050-x) | [6108510](https://pubmed.ncbi.nlm.nih.gov/6108510) | The study describes a two-compartment open model for suramin in rats, but the abstract only provides qualitative descriptions and doubling times for the parasites, lacking specific numeric PK parameter values (CL, V, k12, etc.). |
| `Hutson_1993.pdf` | Hutson PR et al., Evidence of an absorption phase after s…, Cancer chemotherapy and pha… (1993) | popPK | 9 | [10.1007/BF00685042](https://doi.org/10.1007/BF00685042) | [8453691](https://pubmed.ncbi.nlm.nih.gov/8453691) | The paper describes a PK study of suramin in humans and proposes a model, but the evidence provided lacks specific numeric values for clearance, volume, or rate constants, mentioning only a distribution half-life. |
| `Motzer_1992.pdf` | Motzer RJ et al., Phase II trial of suramin in patients w…, Cancer research (1992) | popPK | 9 | not captured | [1394202](https://pubmed.ncbi.nlm.nih.gov/1394202) | The study reports population pharmacokinetic parameters (Vd, t1/2) for suramin in humans using a two-compartment model, but specific clearance values are not explicitly listed in the abstract text. |

<sub>queue written 2026-10-14T19:58:08.332312+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agarwal_2012 | irrelevant | 0 | 0 | The study is a synthesis and in vitro anti-HIV activity assessment of suramin conjugates, reporting no pharmacokinetic parameters. |
| popPK | Albulescu_2015 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of suramin's antiviral activity against Chikungunya virus and does not report any pharmacokinetic disposition parameters. |
| popPK | Albulescu_2017 | irrelevant | 0 | 0 | The study is an in-vitro virology paper focusing on antiviral mechanism of action (EC50), not pharmacokinetic disposition parameters. |
| PGx | Alsford_2013 | not_relevant | 0 | 0 | The paper discusses the mechanism of suramin uptake in trypanosomes, not human pharmacogenomics or host PK/PD parameters. |
| popPK | Bachmann_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CFTR inhibition in Xenopus oocytes, reporting no pharmacokinetic parameters (CL, V, t1/2) for suramin sodium. |
| PGx | Bapiro_2002 | not_relevant | 0 | 0 | The paper investigates CYP induction by antiparasitic drugs and notes that suramin has no effect on CYP1A, but it does not report a pharmacogenomic effect on suramin's PK or PD. |
| popPK | Barajas-López_1993 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of purinoceptors in guinea-pig neurons and contains no pharmacokinetic data. |
| popPK | Barajas-López_1995 | irrelevant | 0 | 0 | The paper is an electrophysiology study on acetylcholine release in guinea pig neurons where suramin is used only as a tool/antagonist, and no pharmacokinetic parameters are reported. |
| popPK | Bouteille_1995 | irrelevant | 0 | 0 | The study focuses on the antimicrobial efficacy of megazol in mice, with suramin acting only as a co-administered comparator drug without any pharmacokinetic data or numeric disposition parameters reported. |
| popPK | Bowler_2003 | irrelevant | 0 | 0 | This is an electrophysiological study of ATP receptors on rat alveolar macrophages where suramin is used only as a pharmacological antagonist, and no pharmacokinetic parameters for suramin are reported. |
| popPK | Bültmann_1997 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of guanine nucleotides in rat aorta, using suramin only as a pharmacological antagonist/comparator rather than analyzing its pharmacokinetics. |
| PGx | Cafferati_2025 | not_relevant | 0 | 0 | The study investigates the effects of suramin on CRAT enzyme activity in vitro, not the effect of a genetic variant on suramin's PK/PD parameters. |
| popPK | Charlton_1996 | irrelevant | 0 | 0 | The study is an in-vitro receptor pharmacology investigation assessing suramin's antagonist potency (pA2 values), not a pharmacokinetic study of suramin sodium disposition. |
| popPK | Chaudhry_1996 | irrelevant | 2 | 0 | The study focuses on the clinical characterization of suramin-induced neuropathy and while it references a PK model for dosing, it does not report quantitative pharmacokinetic parameters (CL, V, etc.) for suramin sodium. |
| PGx | Chen_1996 | not_relevant | 0 | 0 | The paper characterizes a rat pituitary ATP receptor clone and notes suramin as a pharmacological inhibitor, but does not report any pharmacogenomic effect (gene variant/genotype) on the PK or PD parameters of suramin sodium. |
| popPK | Cooper_1992 | relevant | 10 | 0 | The abstract describes a three-compartment population pharmacokinetic model for suramin, but no specific numeric parameter values (CL, V, Q, ka, t1/2) are provided in the evidence text. |
| popPK | Dagni_2022 | irrelevant | 0 | 0 | The paper is a review of the plant genus Dysphania and does not mention suramin_sodium or report any pharmacokinetic parameters. |
| popPK | Del_2023 | irrelevant | 0 | 0 | The study investigates the vasomotor effects of Neuropeptide Y in human arteries using wire myography, and suramin is used only as a pharmacological antagonist, not as the subject of a pharmacokinetic analysis. |
| popPK | Evans_1995 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study of P2x receptors where suramin is used as a non-specific antagonist, not a study of suramin's pharmacokinetics. |
| popPK | Fairlamb_1980 | relevant | 9 | 0 | The study describes a two-compartment open model for suramin in rats, but the abstract only provides qualitative descriptions and doubling times for the parasites, lacking specific numeric PK parameter values (CL, V, k12, etc.). |
| popPK | Freissmuth_1996 | irrelevant | 0 | 0 | The paper describes in vitro mechanistic studies of suramin analogues as G protein inhibitors, reporting EC50 values for binding assays rather than population pharmacokinetic parameters like clearance or volume. |
| popPK | Green_1997 | irrelevant | 0 | 0 | The paper is a cellular pharmacology study using suramin as an antagonist for P2 receptors in skate Schwann cells, containing no pharmacokinetic or disposition parameters. |
| PGx | Guyton_1996 | not_relevant | 0 | 0 | The study investigates MAPK signaling mechanisms and cell survival in response to H2O2, and while suramin is used as a pretreatment to inhibit receptor activity, it does not report any pharmacokinetic or pharmacodynamic parameters of suramin sodium itself, nor does it involve any genetic variants or genotypes. |
| popPK | Hansmann_1997 | irrelevant | 0 | 0 | The study uses suramin as a pharmacological antagonist to characterize P2-receptors in rat aorta and does not report any pharmacokinetic disposition parameters (CL, V, etc.) for suramin. |
| popPK | Ho_2015 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of suramin's antiviral activity against Chikungunya virus, not a pharmacokinetic study; no PK parameters are reported. |
| popPK | Hutson_1993 | relevant | 9 | 2 | The paper describes a PK study of suramin in humans and proposes a model, but the evidence provided lacks specific numeric values for clearance, volume, or rate constants, mentioning only a distribution half-life. |
| PGx | Hutson_1998 | not_relevant | 0 | 0 | The paper describes PK/PD and dose individualization in a patient population but reports no specific gene variants or genetic effects on suramin pharmacokinetics. |
| popPK | Hwu_2017 | irrelevant | 0 | 0 | The study reports in-vitro antiviral activity (EC50) of new suramin-derived compounds against chikungunya virus, containing no pharmacokinetic parameters for suramin sodium. |
| popPK | Jacques-Silva_2004 | irrelevant | 0 | 0 | The paper is a mechanistic study on P2X7 receptor signaling in astrocytes where suramin is used only as a pharmacological antagonist, with no pharmacokinetic data reported. |
| popPK | Jia_2007 | irrelevant | 0 | 0 | The paper is a mechanistic study on neuromuscular junction remodeling using suramin as a P2 receptor antagonist, not a pharmacokinetic study of suramin sodium. |
| popPK | Jodrell_1994 | relevant | 10 | 0 | The study describes a population pharmacokinetic model for suramin in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract or evidence text. |
| popPK | Jones_2000 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study characterizing P2X(4) receptors where suramin acts as an antagonist, not a pharmacokinetic study. |
| popPK | Kassack_2002 | irrelevant | 0 | 0 | The study is an in-vitro functional screening assay for GPCR antagonism, not a pharmacokinetic study of suramin sodium. |
| popPK | Kessler_2006 | irrelevant | 0 | 0 | This is an in-vitro receptor binding study using suramin as a polyanionic modulator compound, not a pharmacokinetic study of suramin as a subject drug. |
| popPK | Khakh_1995 | irrelevant | 0 | 0 | The study is an electrophysiological analysis of P2X-purinoceptors in rat and guinea-pig neurons where suramin is used only as a non-selective antagonist, reporting no pharmacokinetic parameters for suramin. |
| popPK | Kilgore_2024 | irrelevant | 0 | 0 | The paper is a study on the subcellular distribution of fluorescent drugs in vitro and does not contain any pharmacokinetic parameters for suramin sodium. |
| popPK | King_1997 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study examining suramin as a P2X2 receptor antagonist, not a pharmacokinetic study. |
| popPK | Klinger_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of suramin's interaction with the ryanodine receptor, not a pharmacokinetic study. |
| popPK | Kumar_1987 | irrelevant | 0 | 0 | The study is an in-vitro assessment of anthelmintic activity against hookworms, not a pharmacokinetic study of suramin_sodium. |
| popPK | Lambertucci_2015 | irrelevant | 0 | 0 | The paper is a medicinal chemistry review of P2X receptor ligands and only qualitatively mentions suramin's unfavorable pharmacokinetic properties without reporting any quantitative PK parameters. |
| popPK | Lee_2006 | irrelevant | 0 | 0 | The study focuses on the in-vitro antiviral efficacy (EC50) of suramin against flaviviruses and does not report any pharmacokinetic parameters. |
| popPK | Liu_2002 | irrelevant | 0 | 0 | This is an in vitro mechanistic study on purinergic receptors in macula densa cells where suramin is used only as a receptor antagonist, not as a subject for pharmacokinetic analysis. |
| PGx | Masson_1997 | not_relevant | 2 | 2 | The paper mentions suramin in a list of drugs that "may eventually be" individualized and discusses pharmacogenetics as a general strategy, but it does not report specific gene-variant effects on suramin's PK or PD parameters. |
| popPK | Matern_2021 | irrelevant | 0 | 0 | The paper is a genomic study on Mycobacterium avium antibiotic tolerance and mentions suramin only as a tool compound in a cited study, with no PK data provided. |
| popPK | McCoy_2021 | irrelevant | 0 | 0 | The paper is a study on machine learning link prediction for drug repurposing and only lists suramin as a predicted candidate, containing no pharmacokinetic data or parameters. |
| popPK | Murrin_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of nucleotide receptors where suramin is used only as a nonspecific antagonist, not as the subject of PK analysis. |
| PGx | Ono_1997 | not_relevant | 0 | 0 | The paper discusses a new compound (FP-21399) and only mentions suramin as a related agent without reporting any pharmacogenomic effects or specific PK/PD parameters for suramin sodium. |
| popPK | Pedron_2020 | irrelevant | 0 | 0 | This paper is a medicinal chemistry study on novel nitroaromatic derivatives (specifically compound 12) where suramin is only used as an in vitro reference drug for efficacy comparison, not as the subject of a pharmacokinetic study. |
| popPK | Piscitelli_1997 | relevant | 10 | 4 | The paper reports a population pharmacokinetic analysis of suramin in humans with specific numeric values for the effect of furosemide on clearance (36% decrease), but full parameter estimates are not explicitly listed in the provided text. |
| popPK | Poletto_2006 | irrelevant | 0 | 0 | The study is an electrophysiological investigation of P2X receptors in mouse Leydig cells using suramin as a pharmacological blocker, not a pharmacokinetic study of suramin. |
| popPK | Poletto_2008 | irrelevant | 0 | 0 | The study is an in vitro electrophysiology investigation of chloride channels in mice Leydig cells, using suramin only as a pharmacological blocker to characterize channel kinetics, not for the pharmacokinetic profiling of suramin itself. |
| popPK | Rettinger_2004 | irrelevant | 0 | 0 | The paper describes in vitro electrophysiology of P2X1 receptors and mentions suramin only as a structural analog of an antagonist, containing no pharmacokinetic data for suramin. |
| popPK | Reyno_1995 | irrelevant | 1 | 0 | The paper describes a clinical dosing study using PK parameters but does not report the specific numeric population PK parameter values (CL, V, etc.) in the provided evidence, only the resulting plasma concentration ranges. |
| popPK | Robertson_1996 | irrelevant | 0 | 0 | The study is a pharmacological electrophysiology study characterizing P2X receptors, where suramin is used as a non-specific antagonist/probe, not as the subject drug for PK analysis. |
| popPK | Rosen_1996 | irrelevant | 3 | 0 | The paper mentions using a three-compartment pharmacokinetic model for dose adjustment but does not report the specific quantitative parameter values (CL, V, Q, ka) in the provided text. |
| popPK | Salgado-Benvindo_2020 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral mechanism study reporting EC50 values and viral load reductions, not a pharmacokinetic study with disposition parameters like clearance or volume. |
| popPK | Scamps_1994 | irrelevant | 0 | 0 | The paper is an electrophysiological study using suramin as a P2 purinoceptor antagonist in rat ventricular cells, not a pharmacokinetic study. |
| popPK | Schärfe_2017 | irrelevant | 0 | 0 | This paper is a pharmacogenomics study analyzing genetic variants in drug-related genes and does not report pharmacokinetic parameters for suramin_sodium. |
| popPK | Thomson_1999 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for doxorubicin (PK1/HPMA conjugate), not suramin_sodium. |
| popPK | Townsend-Nicholson_1999 | irrelevant | 0 | 0 | The study is an in-vitro functional characterization of P2X4 receptors in *Xenopus* oocytes where suramin is used only as an antagonist, not a subject drug for PK analysis. |
| PGx | Vishwanath_2023 | not_relevant | 0 | 0 | The paper reports general pharmacokinetics (half-life, Cmax) in rats for a new compound, not a pharmacogenomic effect of a gene variant on suramin_sodium's PK/PD parameters. |
| popPK | Volsky_1992 | irrelevant | 0 | 0 | The study is an in-vitro evaluation of anti-HIV activity (EC50) and does not report pharmacokinetic parameters for suramin. |
| popPK | Vázquez-Cuevas_2010 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of P2Y receptors in mouse theca cells where suramin is used only as a receptor antagonist, not as the subject drug for pharmacokinetic analysis. |
| PGx | Yadav_2020 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of suramin against a Leishmania protein target (LdTCP1γ) in a parasite model, not the effect of human genetic variants on the pharmacokinetics or pharmacodynamics of suramin sodium. |
| popPK | Zhang_2000 | irrelevant | 0 | 0 | Suramin is used as a pharmacological antagonist (P2X purinoceptor blocker) in an electrophysiology study, not as the subject drug for pharmacokinetic analysis. |
| PGx | Zheng_2023 | not_relevant | 0 | 0 | The study uses suramin as a pharmacological tool to block a receptor, not to measure its PK/PD, and does not involve any genetic variants or pharmacogenomics. |
| popPK | Zhong_2000 | irrelevant | 0 | 0 | This is a pharmacological study on P2X receptors where suramin is used only as an antagonist, not a subject drug for PK analysis. |
| popPK | van_1992 | irrelevant | 2 | 0 | The study describes a dosing regimen using Bayesian PK modeling but the evidence provided contains no quantitative PK parameter values (CL, V, etc.) for suramin, only target serum concentrations. |
| popPK | van_2000 | irrelevant | 0 | 0 | The paper is a pharmacological study on P2Y11 receptors where suramin is used only as a receptor antagonist/inhibitor, not as the subject of pharmacokinetic analysis. |
| popPK | von_1995 | irrelevant | 0 | 0 | The study uses suramin as a pharmacological antagonist to characterize P2x-purinoceptors in isolated human blood vessels, not to measure suramin's pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 19:58 UTC</sub>
