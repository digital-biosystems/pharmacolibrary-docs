<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;lormetazepam&quot;}]"></div>

# lormetazepam

- **generic name:** lormetazepam
- **ATC codes:** `N05CD06`
- **DrugBank:** [DB13872](https://go.drugbank.com/drugs/DB13872) · **PubChem:** [CID 13314](https://pubchem.ncbi.nlm.nih.gov/compound/13314)
- **molar mass:** 335.185 g/mol (C16H12Cl2N2O2) — DrugBank
- **groups:** approved

## About

Lormetazepam is a benzodiazepine derivative used as a hypnotic and sedative, mainly for the short-term treatment of insomnia. It is an approved medicine and remains in use, though it is not authorised centrally in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q186257](https://www.wikidata.org/wiki/Q186257) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lormetazepam | parent | 335.185 | C16H12Cl2N2O2 | DrugBank | [13314](https://pubchem.ncbi.nlm.nih.gov/compound/13314) | le_2024 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL/F | — | L/h | 12.9 | mechanically ventilated ICU patients with COVID-19/ARDS | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [le_2024_reference](drugs/drug_lormetazepam/Lormetazepam_le2024_reference.md) |
| V | V/F | 13.1 | L | 13.1 L | mechanically ventilated ICU patients with COVID-19/ARDS | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [le_2024_reference](drugs/drug_lormetazepam/Lormetazepam_le2024_reference.md) |
| ka | kabs | 39.4 | 1/h | 39.4 1/h | mechanically ventilated ICU patients with COVID-19/ARDS | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [le_2024_reference](drugs/drug_lormetazepam/Lormetazepam_le2024_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. — the reported unit did not convert; the value is listed as reported. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q27 — no SI value to build from</sub> | [le_2024_reference](drugs/drug_lormetazepam/Lormetazepam_le2024_reference.md) | — | 1-compartment (no model) | 3 | le Noble JLML et al., Pharmacokinetics of Enteral Lormetazepa…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01455-3](https://doi.org/10.1007/s40262-024-01455-3) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:32 | 21:40 | 0/0/1 | 0/0/0 | 0/0/0 | 1,447,209/58,574 | ollama / glm-5.3-flash | 31 | 2/25 | 29/2 | 0 |

## Coverage

- **PubMed hits:** 78 matched, 67 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kurowski_1982.pdf` | Kurowski M et al., Relationship between EEG dynamics and p…, Pharmacopsychiatria (1982) | popPK | 6 | [10.1055/s-2007-1019513](https://doi.org/10.1055/s-2007-1019513) | [6124982](https://pubmed.ncbi.nlm.nih.gov/6124982) | Human PK study with two-compartment model and elimination half-life (10.3 h) reported, but no CL/V values and other parameters not shown. |

<sub>queue written 2026-10-06T21:19:03.812370+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adler_2026 | irrelevant | 0 | 0 | This is a phage-antibiotic interaction study in bacteria with no lormetazepam PK data or parameters. |
| popPK | Alkhatip_2026 | irrelevant | 0 | 0 | Computational docking/MD study of ketamine analogues; lormetazepam is not the subject drug and no PK parameters appear. |
| PGx | Ambrosio_2018 | not_relevant | 0 | 5 | In vitro drug-drug interaction effects on morphine metabolism, not a gene variant effect on lormetazepam PK/PD. |
| popPK | Attwa_2023 | irrelevant | 0 | 0 | The paper is about alvocidib (flavopiridib), not lormetazepam; it is an in vitro HLM metabolic stability study of a different drug with no lormetazepam parameters. |
| popPK | Bhardwaj_2025 | irrelevant | 0 | 0 | This is an in-silico molecular docking/virtual screening study of thiazole LasR inhibitors in P. aeruginosa; lormetazepam is not mentioned and no PK parameters exist. |
| popPK | Boby_2023 | irrelevant | 0 | 0 | This is a SARS-CoV-2 protease inhibitor drug discovery paper; lormetazepam is not mentioned and no PK parameters for it appear. |
| popPK | Clokie_2026 | irrelevant | 0 | 0 | This is a phage-antibiotic interaction study in bacteria with no lormetazepam PK data or parameters. |
| popPK | Di_2026 | irrelevant | 0 | 0 | This is a medicinal chemistry study of menthol-based antimicrobials with no lormetazepam PK data or parameters. |
| popPK | Dinu_2025 | irrelevant | 0 | 0 | A review on sulfonylureas and antioxidants for diabetes; lormetazepam is not mentioned and no PK parameters are reported. |
| popPK | Disharoon_2026 | irrelevant | 0 | 0 | This is a deep-learning drug-drug interaction prediction paper with no lormetazepam PK parameters; the numeric values are model performance metrics (AUC-ROC, AUPRC), not disposition parameters. |
| popPK | Dusek_2025 | irrelevant | 0 | 0 | This paper is about the CAR agonist/PXR antagonist MI-883, not lormetazepam; no lormetazepam PK parameters appear, and MI-883's half-life values are in supplementary material. |
| popPK | El-Saghier_2021 | irrelevant | 0 | 0 | This is a synthetic chemistry/docking paper on quinoline derivatives with no lormetazepam PK data whatsoever. |
| popPK | Ghonia_2026 | irrelevant | 0 | 0 | This is a synthetic chemistry/in-vitro anticancer study of isoxazol–triazole conjugates; lormetazepam is not mentioned and no PK parameters exist. |
| popPK | Hauseman_2025 | irrelevant | 0 | 0 | This is a cancer biology/drug discovery paper about SHOC2–RAS inhibitors; lormetazepam and any PK parameters are entirely absent. |
| popPK | Jesudason_2026 | irrelevant | 0 | 0 | No lormetazepam or any PK disposition parameters appear; this is a medicinal chemistry/pharmacodynamics study of a SHIP1 ligand. |
| popPK | Krishnan_2025 | irrelevant | 0 | 0 | This is an AI-driven antibiotic design study with no lormetazepam PK parameters reported. |
| popPK | Kurowski_1982 | relevant | 6 | 3 | Human PK study with two-compartment model and elimination half-life (10.3 h) reported, but no CL/V values and other parameters not shown. |
| popPK | McKeown_2024 | irrelevant | 0 | 0 | This is a medicinal chemistry/cancer biology paper on ethanoanthracene compounds in CLL cell lines with no lormetazepam PK data whatsoever. |
| popPK | Mejdrová_2023 | irrelevant | 0 | 0 | Medicinal chemistry paper on CAR agonists; no lormetazepam PK parameters reported. |
| popPK | Moral-Sanz_2026 | irrelevant | 0 | 0 | This is a senolytic toxin study with no lormetazepam PK parameters; lormetazepam is not mentioned at all. |
| popPK | Nasr_2026 | irrelevant | 0 | 0 | This is an in vitro anticancer/drug-design study of thiazole EGFR/CDK-2 inhibitors with no lormetazepam PK parameters. |
| popPK | Nourmandipour_2025 | irrelevant | 0 | 0 | This is a medicinal chemistry/anti-nociception study of morphine derivatives; no lormetazepam and no PK disposition parameters, only computational ADME predictions. |
| popPK | Rosencrans_2025 | irrelevant | 0 | 0 | This is a cell-biology study of PINK1/Parkin mitophagy activators (FB231, MTK458) with no lormetazepam PK parameters; no lormetazepam appears at all. |
| popPK | Sako_2026 | irrelevant | 0 | 0 | This is a molecular generation/drug design paper with no lormetazepam PK parameters; ADMET predictions are in silico and not for lormetazepam. |
| popPK | Sayaf_2024 | irrelevant | 0 | 0 | This is a molecular docking/ADMET-prediction study of PHD inhibitors; lormetazepam is not mentioned and no PK disposition parameters for it exist. |
| popPK | Singh_2025 | irrelevant | 0 | 0 | This is a medicinal chemistry paper on synthesized pyrrole-fused pyrimidine InhA inhibitors; lormetazepam is not mentioned and no PK parameters exist. |
| popPK | Spinaci_2023 | irrelevant | 0 | 0 | Medicinal chemistry paper on A2AAR/CK1δ dual inhibitors; no lormetazepam or any PK parameters present. |
| popPK | Tavares_2023 | irrelevant | 0 | 0 | This is an antimalarial HDAC inhibitor medicinal chemistry paper; lormetazepam is not mentioned and no PK disposition parameters for it exist. |
| popPK | Tharmalingam_2026 | irrelevant | 0 | 0 | This is an antimicrobial mechanism study of candesartan cilexetil against MRSA; no lormetazepam PK parameters are reported anywhere. |
| popPK | Todsaporn_2026 | irrelevant | 0 | 0 | This is a QSAR/ML study of JAK2 inhibitors for cervical cancer with no lormetazepam PK data of any kind. |
| popPK | Vanangamudi_2023 | irrelevant | 0 | 0 | This is a review of NNRTI anti-HIV drug design; lormetazepam is not mentioned at all. |
| popPK | Waitman_2025 | irrelevant | 0 | 0 | This is a medicinal chemistry/ML modeling study of HDAC6/AKT2 inhibitors with no lormetazepam PK parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 21:19 UTC</sub>
