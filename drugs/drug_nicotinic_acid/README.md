<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C04A&quot;,&quot;href&quot;:&quot;atc/C04A.md&quot;},{&quot;label&quot;:&quot;nicotinic acid&quot;}]"></div>

# nicotinic acid

- **generic name:** nicotinic acid
- **ATC codes:** `C04AC01`, `C10AD02`, `C10BA01`
- **DrugBank:** [DB00627](https://go.drugbank.com/drugs/DB00627) · **PubChem:** [CID 938](https://pubchem.ncbi.nlm.nih.gov/compound/938)
- **molar mass:** 123.1094 g/mol (C6H5NO2) — DrugBank
- **groups:** approved, investigational, nutraceutical

## About

Nicotinic acid, the acid form of vitamin B3, is used to treat pellagra and familial hyperlipidemia, and acts as a lipid-lowering agent and peripheral vasodilator. It is an approved medicine and nutraceutical, widely available as a vitamin supplement and lipid-modifying drug, though no EU-wide marketing authorisation is recorded.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q134658](https://www.wikidata.org/wiki/Q134658) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nicotinic acid (nicotinic_acid) | parent | 123.109 | C6H5NO2 | DrugBank | [938](https://pubchem.ncbi.nlm.nih.gov/compound/938) | Iwaki_1996, Wu_1989 |
| nicotinuric acid | metabolite | 180.163 | C8H8N2O3 | PubChem | [68499](https://pubchem.ncbi.nlm.nih.gov/compound/68499) | Iwaki_1996 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| V | V | 70 ‡ | L | 1.0 L kg−1 | rats |  | rat | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Iwaki_1996_reference](drugs/drug_nicotinic_acid/NicotinicAcid_Iwaki1996_reference.md) |
| V | V | 70 ‡ | L | 1.0 L kg−1 | rabbits | 12 | rabbit | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Wu_1989_reference](drugs/drug_nicotinic_acid/NicotinicAcid_Wu1989_reference.md) |
| ka | kabs | 6 | 1/h | 0.1 min−1 | rats |  | rat | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Iwaki_1996_reference](drugs/drug_nicotinic_acid/NicotinicAcid_Iwaki1996_reference.md) |
| ka | kabs | 6 | 1/h | 0.1 min−1 | rabbits | 12 | rabbit | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Wu_1989_reference](drugs/drug_nicotinic_acid/NicotinicAcid_Wu1989_reference.md) |
| t½ | t1/2z | 2.337 | h | 2.3374 h | rabbits | 12 | rabbit | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Wu_1989_reference](drugs/drug_nicotinic_acid/NicotinicAcid_Wu1989_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="V across studies"><text x="190" y="14" font-size="12" font-weight="600">V (L, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">100</text><text x="184" y="34.0" font-size="11" text-anchor="end">Iwaki_1996 · V ·/kg</text><circle cx="485.8" cy="30.0" r="4" fill="#ef6c00"><title>Iwaki_1996 · V ·/kg: 70 L</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Wu_1989 · V ·/kg</text><circle cx="485.8" cy="46.0" r="4" fill="#ef6c00"><title>Wu_1989 · V ·/kg: 70 L</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>stale — current check: Needs review</sub><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub> | [Iwaki_1996_reference](drugs/drug_nicotinic_acid/NicotinicAcid_Iwaki1996_reference.md) | — | parent + metabolite (no model) | 3 | Iwaki M et al., Acute dose-dependent disposition studie…, Drug metabolism and disposi… (1996) | — |
| <span class="pk-rf" hidden data-species="rabbit" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rabbit</span><br><sub>stale — current check: Needs review</sub><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub> | [Wu_1989_reference](drugs/drug_nicotinic_acid/NicotinicAcid_Wu1989_reference.md) | — | 1-compartment (no model) | 4 | Wu Y et al., [Determination of aspirin and nicotinic…, Yao xue xue bao = Acta phar… (1989) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Andersson_2017_FFA](drugs/drug_nicotinic_acid/pd_Andersson_2017_FFA.md) | FFA ← NiAc · indirect response — drug inhibits the loss of FFA | — | Andersson R et al., Modeling of free fatty acid dynamics: i…, Journal of pharmacokinetics… (2017) | [10.1007/s10928-017-9512-6](https://doi.org/10.1007/s10928-017-9512-6) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Andersson_2017_insulin](drugs/drug_nicotinic_acid/pd_Andersson_2017_insulin.md) | insulin ← NiAc · indirect response — drug inhibits the loss of insulin | — | Andersson R et al., Modeling of free fatty acid dynamics: i…, Journal of pharmacokinetics… (2017) | [10.1007/s10928-017-9512-6](https://doi.org/10.1007/s10928-017-9512-6) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Andersson_2016_FFA](drugs/drug_nicotinic_acid/pd_Andersson_2016_FFA.md) | FFA ← nicotinic_acid · indirect response — drug inhibits the production of FFA | — | Andersson R et al., Dose-response-time modelling: Second-ge…, European journal of pharmac… (2016) | [10.1016/j.ejps.2015.10.018](https://doi.org/10.1016/j.ejps.2015.10.018) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=nicotinic_acid).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `SLC22A5` inhibitor, `SLCO2B1` inhibitor | DrugBank actor |
| distribution | skeletal muscle | `SLC22A5` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP2D6` inhibitor, `CYP2E1` inhibitor, `CYP3A4` inhibitor, `SLCO2B1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |
| excretion | kidney | `SLC22A5` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: DGAT2 (inhibitor), HCAR2 (target), HCAR3 (target), NNMT (binder), QPRT (binder), SERPINA7 (inhibitor), SLC16A1 (substrate), SLC16A3 (unknown), SLC5A8 (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:46 | 17:49 | 2/0/0 | 2/0/0 | 0/0/0 | 297,121/49,547 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 2/6 | 8/0 | 0 |

## Coverage

- **PubMed hits:** 42 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs review 2  ·  rejected 0  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Iwaki_1996.pdf` | Iwaki M et al., Acute dose-dependent disposition studie…, Drug metabolism and disposi… (1996) | popPK | 10 |  | [8818575](https://pubmed.ncbi.nlm.nih.gov/8818575) | The study reports quantitative PK parameters (clearance, volume of distribution, model fit) for nicotinic acid in rats, with specific numeric values for urinary excretion ratios and protein binding provided in the text. |
| `Wu_1989.pdf` | Wu Y et al., [Determination of aspirin and nicotinic…, Yao xue xue bao = Acta phar… (1989) | popPK | 9 |  | [2609979](https://pubmed.ncbi.nlm.nih.gov/2609979) | The study reports quantitative PK parameters (T1/2, AUC) for nicotinic acid in a two-compartment model, though specific clearance and volume values are not explicitly listed in the text. |
| `Ahlström_2013.pdf` | Ahlström C et al., Challenges of a mechanistic feedback mo…, Journal of pharmacokinetics… (2013) | popPK | 8 | [10.1007/s10928-013-9325-1](https://doi.org/10.1007/s10928-013-9325-1) | [23824920](https://pubmed.ncbi.nlm.nih.gov/23824920) | The study reports a compartmental PK model for nicotinic acid in rats, but the specific numeric values for clearance, volume, or half-life are not explicitly listed in the provided text, only mechanistic parameters like IC50 and turnover rates. |

<sub>queue written 2026-10-06 20:30 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahlström_2013 | relevant | 8 | 2 | The study reports a compartmental PK model for nicotinic acid in rats, but the specific numeric values for clearance, volume, or half-life are not explicitly listed in the provided text, only mechanistic parameters like IC50 and turnover rates. |
| popPK | Andersson_2016 | irrelevant | 2 | 0 | The study is a pharmacodynamic (DRT) analysis of free fatty acids where nicotinic acid exposure data was intentionally excluded, and no quantitative PK parameters (CL, V, etc.) for nicotinic acid are reported in the text. |
| popPK | Andersson_2017 | irrelevant | 2 | 1 | The study focuses on pharmacodynamic modeling of free fatty acid dynamics and insulin resistance in rats, not on the quantitative pharmacokinetic disposition parameters (CL, V, ka) of nicotinic acid itself. |
| popPK | Andersson_2019 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic dose-response-time modeling of nicotinic acid's effect on free fatty acids and insulin, explicitly noting the lack of exposure (PK) data, and does not report quantitative PK parameters like clearance or volume. |
| popPK | Blum_1977 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of HDL (apolipoproteins) in humans, using nicotinic acid only as a dietary perturbation to observe effects on HDL metabolism, not as the subject drug. |
| popPK | Croyal_2015 | irrelevant | 0 | 0 | The study measures the kinetics of apolipoprotein (a) and lipoproteins, not the pharmacokinetic parameters (CL, V, ka) of nicotinic acid itself. |
| popPK | Dal_1991 | irrelevant | 0 | 0 | The study is an in-vitro permeation study of nicotinic acid derivatives, not a pharmacokinetic study reporting disposition parameters for nicotinic acid in vivo. |
| popPK | Jeong_2020 | irrelevant | 0 | 0 | The study focuses on a 5-ASA codrug (ASA-azo-NA) and its anticolitic effects, with nicotinic acid serving only as a structural component/GPR109A agonist rather than the subject of a pharmacokinetic parameter analysis. |
| popPK | Jurutka_2021 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on RXR agonists (bexarotene and NEt-4IB analogs) and does not report pharmacokinetic parameters for nicotinic acid. |
| popPK | Le_2015 | irrelevant | 2 | 0 | The study measures HDL cholesteryl ester and apolipoprotein AI turnover kinetics in dogs, not the pharmacokinetic disposition parameters (CL, V, ka) of nicotinic acid itself. |
| popPK | Leander_2015 | relevant | 9 | 2 | The paper presents a population PK model for nicotinic acid in rats, but the specific numeric parameter estimates are not listed in the provided text (likely in tables or figures not included). |
| popPK | Trabbic_2015 | irrelevant | 0 | 0 | The study investigates the receptor binding and calcium release properties of NAADP analogues, not the pharmacokinetics of nicotinic acid. |
| popPK | Vasudevan_2008 | irrelevant | 0 | 0 | The paper describes a biochemical enzyme (NAADP synthase) in sea urchin sperm and does not report pharmacokinetic parameters for nicotinic acid. |
| popPK | Williams_2002 | irrelevant | 0 | 0 | The paper is a review of pharmacokinetic interactions involving statins, and nicotinic acid is only mentioned as a co-administered drug associated with pharmacodynamic myopathy risk, with no PK parameters reported for it. |
| popPK | Wu_2022 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and fungicidal activity of nicotinamide derivatives, containing no pharmacokinetic data for nicotinic acid. |
| popPK | Zandi-Nejad_2013 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of macrophage function and does not report pharmacokinetic disposition parameters for nicotinic acid. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnicotinic_acid%5D&body=Drug%3A%20nicotinic_acid%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_nicotinic_acid/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-06 20:31 UTC</sub>
