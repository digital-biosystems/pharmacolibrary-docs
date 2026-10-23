<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;modafinil&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Modafinil_Tao2010_reference&quot;,&quot;label&quot;:&quot;Tao_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_modafinil/Modafinil_Tao2010_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# modafinil

- **generic name:** modafinil
- **ATC codes:** `N06BA07`
- **DrugBank:** [DB00745](https://go.drugbank.com/drugs/DB00745) · **PubChem:** [CID 4236](https://pubchem.ncbi.nlm.nih.gov/compound/4236)
- **molar mass:** 273.35 g/mol (C15H15NO2S) — DrugBank
- **groups:** approved, investigational

## About

Modafinil is a wakefulness-promoting stimulant used for sleep disorders such as narcolepsy and hypersomnia, and studied for fatigue, ADHD and multiple sclerosis-related tiredness. It is an approved medicine, widely used for narcolepsy, though it carries a boxed warning and is also investigated for other conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q410441](https://www.wikidata.org/wiki/Q410441) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| modafinil | parent | 273.35 | C15H15NO2S | DrugBank | [4236](https://pubchem.ncbi.nlm.nih.gov/compound/4236) | Tao_2010, Wu_2012 |
| armodafinil | metabolite | 273.35 | C15H15NO2S | PubChem | [9690109](https://pubchem.ncbi.nlm.nih.gov/compound/9690109) | Willavize_2017 |
| modafinil acid | metabolite | 274.334 | C15H14O3S | PubChem | [3085267](https://pubchem.ncbi.nlm.nih.gov/compound/3085267) | Wu_2012 |
| modafinil sulfone | metabolite | 289.349 | C15H15NO3S | PubChem | [6460146](https://pubchem.ncbi.nlm.nih.gov/compound/6460146) | Willavize_2017 |
| R-modafinil acid | metabolite | 274.334 | C15H14O3S | PubChem | [11300303](https://pubchem.ncbi.nlm.nih.gov/compound/11300303) | Willavize_2017 |

## Start here

> **Tao_2010_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> healthy Chinese volunteers of five ethnicities, n = 49. [Run it in the simulator](drugs/drug_modafinil/Modafinil_Tao2010_reference.md?tab=Simulation) · [record](drugs/drug_modafinil/Modafinil_Tao2010_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 3.51 | L/h | 3.51 L/h | healthy Chinese volunteers of five ethnicities | 49 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Tao_2010_reference](drugs/drug_modafinil/Modafinil_Tao2010_reference.md) |
| V | V1 | 3.85 | L | 3.85 L | healthy Chinese volunteers of five ethnicities | 49 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Tao_2010_reference](drugs/drug_modafinil/Modafinil_Tao2010_reference.md) |
| V | V1 | 7.74 | L | 7.74 l | healthy volunteers from 5 ethnic groups of China | 49 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Wu_2012_reference](drugs/drug_modafinil/Modafinil_Wu2012_reference.md) |
| ka | kabs | 0.697 | 1/h | 0.697 1/h | healthy volunteers from 5 ethnic groups of China | 49 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Wu_2012_reference](drugs/drug_modafinil/Modafinil_Wu2012_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="V across studies"><text x="190" y="14" font-size="12" font-weight="600">V (L, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">1</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">10</text><text x="184" y="34.0" font-size="11" text-anchor="end">Tao_2010 · V1</text><circle cx="394.9" cy="30.0" r="4" fill="#2e7d32"><title>Tao_2010 · V1: 3.85 L</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Wu_2012 · V1</text><circle cx="501.1" cy="46.0" r="4" fill="#78909c"><title>Wu_2012 · V1: 7.74 L</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Tao_2010_reference](drugs/drug_modafinil/Modafinil_Tao2010_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Tao G et al., Population pharmacokinetics of modafini…, Therapeutic drug monitoring (2010) | [10.1097/FTD.0b013e3181cf27d3](https://doi.org/10.1097/FTD.0b013e3181cf27d3) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Not simulated" data-sim="no"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> | [Wu_2012_reference](drugs/drug_modafinil/Modafinil_Wu2012_reference.md) | model (no simulator) | 1-compartment, oral | 7 | Wu KH et al., Population pharmacokinetics of modafini…, Acta pharmacologica Sinica (2012) | [10.1038/aps.2012.124](https://doi.org/10.1038/aps.2012.124) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Willavize_2017_reference](drugs/drug_modafinil/Modafinil_Willavize2017_reference.md) | — | general linear (no model) | 4 | Willavize S et al., Population Pharmacokinetic Modeling of…, Journal of clinical pharmac… (2017) | [10.1002/jcph.800](https://doi.org/10.1002/jcph.800) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Darwish_2012_MSLT](drugs/drug_modafinil/pd_Darwish_2012_MSLT.md) | Multiple Sleep Latency Test time (placebo-subtracted) ← modafinil · direct Emax (saturable) effect | — | Darwish M et al., Armodafinil and modafinil in patients w…, Journal of clinical pharmac… (2012) | [10.1177/0091270011417825](https://doi.org/10.1177/0091270011417825) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=modafinil).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | brain | `CYP2D6` inducer | DrugBank actor |
| metabolism | kidney | `CYP3A5` inducer/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inducer, `CYP2B6` inducer/inhibitor, `CYP2C19` inhibitor, `CYP2C9` inducer/inhibitor, `CYP2D6` inducer, `CYP3A4` inducer/substrate, `CYP3A5` inducer/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate, `CYP3A5` inducer/substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ADRA1B (partial agonist), SLC6A3 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:58 | 2:31 | 2/1/0 | 1/0/0 | 0/0/0 | 136,913/10,057 | ollama / glm-5.3-flash | 3 | 2/1 | 2/1 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Seng_2011.pdf` | Seng KY et al., Population pharmacokinetics of modafini…, Therapeutic drug monitoring (2011) | popPK | 10 | [10.1097/FTD.0b013e318237a9e9](https://doi.org/10.1097/FTD.0b013e318237a9e9) | [22105589](https://pubmed.ncbi.nlm.nih.gov/22105589) | A population PK model of modafinil and its metabolites in humans is described, but no numeric parameter values (CL, V, ka) appear in the evidence, likely in tables/supplements not provided. |
| `Tao_2010.pdf` | Tao G et al., Population pharmacokinetics of modafini…, Therapeutic drug monitoring (2010) | popPK | 10 | [10.1097/FTD.0b013e3181cf27d3](https://doi.org/10.1097/FTD.0b013e3181cf27d3) | [20216121](https://pubmed.ncbi.nlm.nih.gov/20216121) | Population PK (NONMEM) of modafinil in healthy volunteers with full numeric CL, Q, Vc, Vp and IIV values reported in the abstract. |
| `Willavize_2017.pdf` | Willavize S et al., Population Pharmacokinetic Modeling of…, Journal of clinical pharmac… (2017) | popPK | 10 | [10.1002/jcph.800](https://doi.org/10.1002/jcph.800) | [27436172](https://pubmed.ncbi.nlm.nih.gov/27436172) | Population PK model of armodafinil (R-modafinil) and its metabolites with full numeric CL/F, Vc/F, and absorption half-life reported directly in the abstract. |
| `Ma_2012.pdf` | Ma ZQ et al., [Pharmacokinetics--pharmacodynamics of…, Yao xue xue bao = Acta phar… (2012) | popPK | 8 | not captured | [22493813](https://pubmed.ncbi.nlm.nih.gov/22493813) | Mouse PK study reporting numeric two-compartment parameters (t1/2α, t1/2β, Cmax, AUC) directly in the abstract, though CL/V not given. |
| `Darwish_2012.pdf` | Darwish M et al., Armodafinil and modafinil in patients w…, Journal of clinical pharmac… (2012) | popPK | 6 | [10.1177/0091270011417825](https://doi.org/10.1177/0091270011417825) | [22039290](https://pubmed.ncbi.nlm.nih.gov/22039290) | Population PK model for modafinil/armodafinil is described, but numeric PK parameters (CL, V, ka) are not shown in the evidence; only an EC50 value appears. |

<sub>queue written 2026-10-07T00:55:48.310140+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chayrov_2022 | irrelevant | 0 | 0 | This is a synthesis/neuroprotection/solubility study of memantine conjugates; modafinil is only a chemical moiety, with no PK disposition parameters reported. |
| popPK | Darwish_2012 | relevant | 6 | 3 | Population PK model for modafinil/armodafinil is described, but numeric PK parameters (CL, V, ka) are not shown in the evidence; only an EC50 value appears. |
| popPK | Lees_2017 | irrelevant | 0 | 0 | This is a cognitive-effects trial of modafinil with no PK disposition parameters (CL, V, ka, half-life, or PK model) reported; the only numbers are neuropsychological test scores. |
| popPK | Novotna_2014 | irrelevant | 0 | 0 | In-vitro receptor reporter study with no PK disposition parameters for modafinil. |
| popPK | Seng_2011 | relevant | 10 | 3 | A population PK model of modafinil and its metabolites in humans is described, but no numeric parameter values (CL, V, ka) appear in the evidence, likely in tables/supplements not provided. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 00:56 UTC</sub>
