<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;ergotamine&quot;}]"></div>

# ergotamine

- **generic name:** ergotamine
- **ATC codes:** `N02CA02`
- **DrugBank:** [DB00696](https://go.drugbank.com/drugs/DB00696) · **PubChem:** [CID 8223](https://pubchem.ncbi.nlm.nih.gov/compound/8223)
- **molar mass:** 581.6615 g/mol (C33H35N5O5) — DrugBank
- **groups:** approved

## About

Ergotamine is an ergot alkaloid used to treat migraine attacks. It is an approved antimigraine medicine, though its use is limited by safety concerns and it is generally not a first-choice treatment.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419186](https://www.wikidata.org/wiki/Q419186) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ergotamine | parent | 581.662 | C33H35N5O5 | DrugBank | [8223](https://pubchem.ncbi.nlm.nih.gov/compound/8223) | Tfelt-Hansen_1985 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 04:12 | 2:27 | 0/1/0 | 3/0/1 | 0/0/0 | 225,053/14,827 | einfracz / qwen3.8-27b | 7 | 1/6 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.286), gpt-oss:120b (partly confirmed, agreement 0.833). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Tfelt-Hansen_1985_reference](drugs/drug_ergotamine/Ergotamine_TfeltHansen1985_reference.md) | — | 1-compartment (no model) | 1 | Tfelt-Hansen P et al., Intramuscular ergotamine: plasma levels…, Clinical pharmacology and t… (1985) | [10.1038/clpt.1985.7](https://doi.org/10.1038/clpt.1985.7) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Bax_1993_contractions_of_the_isolated_human_coronary_artery](drugs/drug_ergotamine/pd_Bax_1993_contractions_of_the_isolated_human_coronary_artery.md) | contractions of the isolated human coronary artery ← ergotamine · direct Emax (saturable) effect | — | Bax WA et al., 5-HT receptors mediating contractions o…, European journal of pharmac… (1993) | [10.1016/0014-2999(93)90995-t](https://doi.org/10.1016/0014-2999(93)90995-t) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Rosenkranz_2008_DNA_fragmentation](drugs/drug_ergotamine/pd_Rosenkranz_2008_DNA_fragmentation.md) | PCD/Apoptosis (DNA fragmentation) ← Ergotamine · stimulation effect | — | Rosenkranz V et al., Alkaloids induce programmed cell death…, Molecules (Basel, Switzerla… (2008) | [10.3390/molecules13102462](https://doi.org/10.3390/molecules13102462) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Tfelt-Hansen_1985_toe_arm_systolic_gradients](drugs/drug_ergotamine/pd_Tfelt_Hansen_1985_toe_arm_systolic_gradients.md) | toe-arm systolic gradients ← ergotamine · delayed effect through an effect compartment | — | Tfelt-Hansen P et al., Intramuscular ergotamine: plasma levels…, Clinical pharmacology and t… (1985) | [10.1038/clpt.1985.7](https://doi.org/10.1038/clpt.1985.7) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">cattle</span> | [Kudupoje_2018_Percent_contraction_NE_normalized](drugs/drug_ergotamine/pd_Kudupoje_2018_Percent_contraction_NE_normalized.md) | Norepinephrine normalized percent contractile response ← ergotamine tartrate · direct sigmoid Emax (Hill) effect | — | Kudupoje MB et al., Contractile Response of Bovine Lateral…, Toxins (2018) | [10.3390/toxins10020058](https://doi.org/10.3390/toxins10020058) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ergotamine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (partial agonist), ADRA1B (partial agonist), ADRA1D (partial agonist), ADRA2A (partial agonist), ADRA2C (unknown), DRD1 (target), DRD2 (target), HTR1A (target), HTR1B (target), HTR1D (target), HTR1F (target), HTR2A (target), HTR2B (unknown), HTR2C (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 41 matched, 31 returned
- **screened:** 4  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tfelt-Hansen_1985.pdf` | Tfelt-Hansen P et al., Intramuscular ergotamine: plasma levels…, Clinical pharmacology and t… (1985) | popPK | 8 | [10.1038/clpt.1985.7](https://doi.org/10.1038/clpt.1985.7) | [3917386](https://pubmed.ncbi.nlm.nih.gov/3917386) | The study reports PK parameters (absorption half-life, biological half-life) and dynamic parameters for intramuscular ergotamine in humans, but specific clearance (CL) and volume (V) values are not explicitly listed in the provided text, only derived rates and concentrations. |
| `Misra_2026.pdf` | Misra A et al., Pharmacology and Pharmacogenomics of An…, CNS & neurological disorder… (2026) | pgx | 8 | [10.2174/0118715273402957251210064344](https://doi.org/10.2174/0118715273402957251210064344) | [41833043](https://www.ncbi.nlm.nih.gov/pubmed/41833043) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Bailey_2004.pdf` | Bailey DG et al., Interactions between grapefruit juice a…, American journal of cardiov… (2004) | pgx | 7 | [10.2165/00129784-200404050-00002](https://doi.org/10.2165/00129784-200404050-00002) | [15449971](https://www.ncbi.nlm.nih.gov/pubmed/15449971) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Buchan_2002.pdf` | Buchan P et al., Frovatriptan: a review of drug-drug int…, Headache (2002) | pgx | 7 | [10.1046/j.1526-4610.42.s2.4.x](https://doi.org/10.1046/j.1526-4610.42.s2.4.x) | [12028322](https://www.ncbi.nlm.nih.gov/pubmed/12028322) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Dresser_2000.pdf` | Dresser GK et al., Pharmacokinetic-pharmacodynamic consequ…, Clinical pharmacokinetics (2000) | pgx | 7 | [10.2165/00003088-200038010-00003](https://doi.org/10.2165/00003088-200038010-00003) | [10668858](https://www.ncbi.nlm.nih.gov/pubmed/10668858) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Fung_2000.pdf` | Fung HB et al., Amprenavir: a new human immunodeficienc…, Clinical therapeutics (2000) | pgx | 7 | [10.1016/S0149-2918(00)80044-2](https://doi.org/10.1016/S0149-2918(00)80044-2) | [10868554](https://www.ncbi.nlm.nih.gov/pubmed/10868554) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-15T04:10:20.159150+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ahmad_2025 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (CYP3A4 inhibition) causing toxicity, not a pharmacogenomic effect of a gene variant on PK/PD parameters. |
| PGx | Avihingsanon_2014 | not_relevant | 0 | 0 | The paper discusses a drug-drug interaction (CYP3A4 inhibition by HIV protease inhibitors) causing toxicity, not a pharmacogenomic effect of a specific gene variant on PK/PD parameters. |
| PGx | Bailey_2004 | not_relevant | 0 | 0 | The paper describes a drug-food interaction (grapefruit juice) affecting ergotamine but does not report any pharmacogenomic effects (gene variants/genotypes) on its PK or PD parameters. |
| popPK | Bax_1993 | irrelevant | 0 | 0 | The study investigates pharmacodynamic contractile responses of human coronary arteries to ergotamine, not pharmacokinetic parameters such as clearance or volume. |
| PGx | Buchan_2002 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions (specifically CYP1A2 inhibition/induction) for frovatriptan, not pharmacogenomic effects of gene variants on ergotamine PK/PD. |
| PGx | Christensen_2016 | not_relevant | 2 | 0 | The paper reports associations between genetic variants and subjective treatment response/success (efficacy), not specific pharmacokinetic (e.g. Cmax, AUC) or pharmacodynamic (e.g. biomarker levels) parameters. |
| PGx | Coufal-Majewski_2016 | not_relevant | 0 | 0 | The paper discusses ergot contamination in food crops and animal health, but does not report pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters of ergotamine in humans. |
| popPK | Dresser_2000 | irrelevant | 1 | 0 | This is a review discussing drug interactions and clinical consequences; it mentions ergotamine only as a clinical example of ergotism and contains no quantitative pharmacokinetic parameter values. |
| PD | Dresser_2000 | not_relevant | 1 | 0 | The text is a general review of CYP3A4 drug interactions that mentions ergotamine only qualitatively in the context of adverse effects (ergotism) without providing any specific pharmacokinetic data, concentration-effect curves, or numeric PD parameters. |
| PGx | Dresser_2000 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (CYP3A4 inhibition) leading to ergotism, not pharmacogenomic effects of gene variants on ergotamine PK/PD. |
| PGx | Fung_2000 | not_relevant | 0 | 0 | The paper reviews amprenavir and mentions ergotamine only as a drug interaction contraindication, with no pharmacogenomic data for ergotamine. |
| popPK | Inoue_2003 | irrelevant | 0 | 0 | This is an in-vitro pharmacological study on 5-HT receptors in pig oviducts where ergotamine is used only as a comparative agonist/antagonist, with no pharmacokinetic parameters reported. |
| PD | Inoue_2003 | not_relevant | 0 | 0 | The paper investigates 5-HT receptor pharmacology in porcine oviducts and only qualitatively mentions ergotamine as a less effective agonist without providing any numeric PD parameters or concentration-effect data for it. |
| popPK | Kudupoje_2018 | irrelevant | 0 | 0 | The study is an in vitro/ex vivo pharmacodynamic and adsorption analysis of ergotamine using bovine saphenous veins, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Larson_1999 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding and mechanistic analysis, not a pharmacokinetic study of ergotamine. |
| popPK | MaassenVanDenBrink_1998 | irrelevant | 1 | 0 | This is an in-vitro pharmacodynamic study measuring coronary artery contraction (EC50/Emax) in human tissue, not a pharmacokinetic study reporting disposition parameters like clearance or volume for ergotamine. |
| PGx | Moubarak_2003 | not_relevant | 0 | 0 | The study investigates enzyme induction and inhibition by ergot alkaloids in rats using dexamethasone, but does not report any genetic variants or pharmacogenomic effects on PK/PD parameters. |
| PGx | Mulac_2012 | not_relevant | 0 | 0 | The paper investigates the permeability of ergot alkaloids across the blood-brain barrier in vitro and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Rosenkrans_2015 | not_relevant | 2 | 5 | The paper reports how a CYP450 genotype in cattle affects CYP450 activity inhibition by ergot alkaloids, but this is a functional assay of enzyme activity in livestock, not a clinical pharmacokinetic or pharmacodynamic parameter of ergotamine treatment in humans. |
| popPK | Rosenkranz_2008 | irrelevant | 0 | 0 | The paper is an in-vitro study on the induction of programmed cell death in trypanosomes and leukemia cells, not a pharmacokinetic study. |
| PGx | Srisuma_2014 | not_relevant | 0 | 0 | The paper describes drug-drug interactions involving CYP3A4 inhibitors, not pharmacogenomic effects caused by specific gene variants or genotypes. |
| popPK | Walkembach_2005 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor interactions and does not report any pharmacokinetic disposition parameters (CL, V, t1/2, etc.) for ergotamine. |
| popPK | Yonpiam_2021 | irrelevant | 0 | 0 | The study focuses on the vasoactive pharmacodynamic effects (vascular contractility) of ergot alkaloids in sheep, not pharmacokinetic parameters like clearance or volume. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 04:10 UTC</sub>
