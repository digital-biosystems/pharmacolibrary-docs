<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C05C&quot;,&quot;href&quot;:&quot;atc/C05C.md&quot;},{&quot;label&quot;:&quot;rutoside&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut&quot;,&quot;label&quot;:&quot;Dom\u00ednguez_2024_extract_equivalent_to_7_4_mg_kg_of_rutin&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rutoside/Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# rutoside

- **generic name:** rutoside
- **ATC codes:** `C05CA01`
- **DrugBank:** [DB01698](https://go.drugbank.com/drugs/DB01698) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Rutoside (rutin), a bioflavonoid, is used as a vasoprotective and capillary-stabilizing agent for circulatory conditions. It remains in use and is approved, though it is also being investigated for other purposes.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q407857](https://www.wikidata.org/wiki/Q407857) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| rutin | parent | 610.521 | C27H30O16 | PubChem | [5280805](https://pubchem.ncbi.nlm.nih.gov/compound/5280805) | Domínguez_2021, Domínguez_2024 |
| quercetin | metabolite | 302.238 | C15H10O7 | PubChem | [5280343](https://pubchem.ncbi.nlm.nih.gov/compound/5280343) | Domínguez_2021, Domínguez_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:50 | 30:47 | 1/6/2 | 0/0/0 | 0/0/0 | 529,733/90,496 | ollama / qwen3.8:27b-mtp-q8_0 | 18 | 4/14 | 16/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.211). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Domínguez_2024_extract_equivalent_to_7_4_mg_kg_of_rutin](drugs/drug_rutoside/Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut.md) | ▶ model + simulator | 1-compartment, IV | 7 | Domínguez Moré GP et al., Rutin and Physalis peruviana Extract: P…, Pharmaceutics (2024) | [10.3390/pharmaceutics16101241](https://doi.org/10.3390/pharmaceutics16101241) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.158). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q61 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Domínguez_2021_stochastic_approximation](drugs/drug_rutoside/Rutoside_Domnguez2021_stochastic_approximation.md) | — | parent + metabolite (no model) | 7 | Domínguez Moré GP et al., Matrix Effects of the Hydroethanolic Ex…, Pharmaceutics (2021) | [10.3390/pharmaceutics13040535](https://doi.org/10.3390/pharmaceutics13040535) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.818). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Data from bacteria, fungi or plants, not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 0.90).">other organism</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Ma_2024_reference](drugs/drug_rutoside/Rutoside_Ma2024_reference.md) | — | 1-compartment (no model) | 2 | Ma P et al., Lonicerae Japonicae Flos with the homol…, Frontiers in oncology (2024) | [10.3389/fonc.2024.1446328](https://doi.org/10.3389/fonc.2024.1446328) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.129). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Domínguez_2021_rutin](drugs/drug_rutoside/Rutoside_Domnguez2021_rutin.md) | — | parent + metabolite (no model) | 13 | Domínguez Moré GP et al., Matrix Effects of the Hydroethanolic Ex…, Pharmaceutics (2021) | [10.3390/pharmaceutics13040535](https://doi.org/10.3390/pharmaceutics13040535) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.15). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Domínguez_2021_value](drugs/drug_rutoside/Rutoside_Domnguez2021_value.md) | — | parent + metabolite (no model) | 7 | Domínguez Moré GP et al., Matrix Effects of the Hydroethanolic Ex…, Pharmaceutics (2021) | [10.3390/pharmaceutics13040535](https://doi.org/10.3390/pharmaceutics13040535) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.143). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Domínguez_2024_intravenous_administration_i_v](drugs/drug_rutoside/Rutoside_Domnguez2024_intravenous_administration_i_v.md) | — | parent + metabolite (no model) | 10 | Domínguez Moré GP et al., Rutin and Physalis peruviana Extract: P…, Pharmaceutics (2024) | [10.3390/pharmaceutics16101241](https://doi.org/10.3390/pharmaceutics16101241) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.13). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C7 apparent-parameter coherence violated (double correction)</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Domínguez_2024_oral_administration_p_o](drugs/drug_rutoside/Rutoside_Domnguez2024_oral_administration_p_o.md) | — | parent + metabolite (no model) | 11 | Domínguez Moré GP et al., Rutin and Physalis peruviana Extract: P…, Pharmaceutics (2024) | [10.3390/pharmaceutics16101241](https://doi.org/10.3390/pharmaceutics16101241) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.15). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Domínguez_2024_pure_rutin_100_mg_kg](drugs/drug_rutoside/Rutoside_Domnguez2024_pure_rutin_100_mg_kg.md) | — | parent + metabolite (no model) | 9 | Domínguez Moré GP et al., Rutin and Physalis peruviana Extract: P…, Pharmaceutics (2024) | [10.3390/pharmaceutics16101241](https://doi.org/10.3390/pharmaceutics16101241) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.769). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Nurfaradilla_2020_reference](drugs/drug_rutoside/Rutoside_Nurfaradilla2020_reference.md) | — | 1-compartment (no model) | 2 | Nurfaradilla SA et al., Pharmacokinetic Herb-Drug Interaction b…, Evidence-based complementar… (2020) | [10.1155/2020/5013898](https://doi.org/10.1155/2020/5013898) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=rutoside) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer | DrugBank actor |

<sub>Actors without a tissue in the table: AKR1C3 (inhibitor), CBR1 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 191 matched, 71 returned
- **screened:** 7  ·  **relevant:** 2
- **records:** 9  ·  extracted 1  ·  needs_review 2  ·  rejected 6  ·  stale 8
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sawai_1987.pdf` | Sawai Y et al., Serum concentrations of rutoside metabo…, Arzneimittel-Forschung (1987) | popPK | 8 | not captured | [3663272](https://pubmed.ncbi.nlm.nih.gov/3663272) | The study reports pharmacokinetic parameters (half-life, Tmax, urinary excretion) for rutoside metabolites in humans, with key numeric values present in the abstract text. |
| `Lemmens_2014.pdf` | Lemmens KJ et al., The flavonoid 7-mono-O-(β-hydroxyethyl)…, Toxicology in vitro : an in… (2014) | pd | 4 | [10.1016/j.tiv.2013.12.019](https://doi.org/10.1016/j.tiv.2013.12.019) | [24412621](https://www.ncbi.nlm.nih.gov/pubmed/24412621) | metadata signals extractable PD data (EC50) |
| `Müller_1998.pdf` | Müller K et al., Ilex aquifolium: protection against enz…, Planta medica (1998) | pd | 4 | [10.1055/s-2006-957509](https://doi.org/10.1055/s-2006-957509) | [9741300](https://www.ncbi.nlm.nih.gov/pubmed/9741300) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-06T22:23:17.734665+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmed_2024 | irrelevant | 0 | 0 | The study focuses on oxovanadium(IV) complexes and does not report pharmacokinetic parameters for rutoside. |
| popPK | Borzeix_1995 | irrelevant | 0 | 0 | The study is a hemodynamic/physiological investigation of venous and lymphatic flow in rabbits, not a pharmacokinetic study reporting disposition parameters for rutoside. |
| popPK | Cermak_2010 | irrelevant | 0 | 0 | no_text gate: only 107 chars of text extracted (&lt; 400) |
| popPK | Chen_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of Laportea bulbifera extract and its components (including rutin, which is structurally related to rutoside but distinct), not rutoside itself. |
| PD | Costea_2022 | not_relevant | 1 | 0 | Rutoside is only quantified as an extract constituent; the IC50 dose-response values are for whole vegetal extracts in in vitro antioxidant assays, not for rutoside itself, and no rutoside exposure-effect or PK/PD relationship is reported. |
| popPK | Dittrich_1985 | irrelevant | 2 | 0 | The study describes an HPLC method and reports relative bioavailability, but does not provide quantitative disposition parameters like clearance, volume, or half-life. |
| popPK | Domínguez_2024 | irrelevant | 1 | 1 | The study investigates the pharmacokinetics of rutin (quercetin-3-O-rutinoside), not rutoside (trirutinoside), which are distinct chemical compounds. |
| popPK | Gerdin_1983 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effect of rutoside on microvascular permeability in rat skin, not its pharmacokinetic disposition parameters. |
| PD | Ghica_2023 | not_relevant | 0 | 0 | Rutoside is only used as a calibration standard for total flavonoid content; no pharmacodynamic or exposure-response relationship for rutoside is reported. |
| popPK | Griffiths_1978 | irrelevant | 2 | 1 | The study reports qualitative distribution and excretion percentages (biliary/urinary) in mice but lacks quantitative compartmental PK parameters (CL, V, ka) for rutoside. |
| popPK | Gupta_2020 | irrelevant | 2 | 0 | The study investigates rutin (a closely related flavonoid glycoside, not rutoside) and reports qualitative detection in ocular tissues without providing quantitative PK parameters (CL, V, t1/2) for rutoside. |
| popPK | He_2026 | irrelevant | 2 | 1 | The paper is a review of rutin (a different drug) and does not report original quantitative PK parameters for rutoside. |
| PD | Hosseini_2025 | not_relevant | 1 | 1 | Only in vitro IC50 bioassay values (antioxidant/cytotoxic/protease inhibition) for isolated compounds including quercetin-3-O-rutoside; no PK, exposure-response, or dose-effect PD modeling. |
| popPK | Hou_2023 | irrelevant | 0 | 0 | The paper is a transcriptomic and metabolomic study of flavonoid biosynthesis in a plant, not a pharmacokinetic study of rutoside. |
| popPK | Jebahi_2025 | irrelevant | 0 | 0 | The study focuses on the synthesis and antimicrobial properties of zinc oxide nanoparticles, not the pharmacokinetics of rutoside. |
| popPK | Lai_2022 | irrelevant | 0 | 0 | The paper is a network pharmacology and molecular docking study of Houttuynia cordata for radiation-induced lung injury, not a pharmacokinetic study of rutoside. |
| popPK | Lemmens_2014 | irrelevant | 0 | 0 | no_text gate: only 116 chars of text extracted (&lt; 400) |
| PD | Lemmens_2014 | not_relevant | 0 | 0 | The text describes a qualitative antioxidant mechanism of action for rutoside on endothelial cells but does not report any quantitative exposure-response, dose-response, or PK/PD analysis with numeric parameters. |
| popPK | Lemmens_2015 | irrelevant | 0 | 0 | The study focuses on the antioxidant activity and toxicity mechanisms of a metabolite in vitro and in mice, without reporting pharmacokinetic parameters for rutoside. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | The study is an in-silico network pharmacology analysis of phytochemicals for osteomyelitis and does not report pharmacokinetic parameters for rutoside. |
| popPK | Luo_2025 | irrelevant | 0 | 0 | The study investigates the antimicrobial synergy and toxicity of rutin (a related flavonoid, not rutoside) and colistin, with no pharmacokinetic parameters reported. |
| popPK | Ma_2024 | irrelevant | 0 | 0 | The paper is a review of Lonicerae Japonicae Flos (Jinyinhua) and its components (e.g., chlorogenic acid, rutin), and does not report pharmacokinetic parameters for rutoside. |
| popPK | Ma_2026 | irrelevant | 0 | 0 | The study analyzes components of Rubi Fructus (including rutin) but does not report pharmacokinetic parameters for rutoside. |
| popPK | Mashaal_2025 | irrelevant | 0 | 0 | The study investigates the molluscicidal and anti-inflammatory effects of star anise extract in snails, not the pharmacokinetics of rutoside. |
| popPK | Metuge_2024 | irrelevant | 0 | 0 | The paper is a molecular docking and MD simulation study of phytochemicals (including rutin, not rutoside) against COX/LOX enzymes, containing no pharmacokinetic data. |
| popPK | Mohamed_2024 | irrelevant | 0 | 0 | The study focuses on kidney stone formation and alkaline diets in rats, with no pharmacokinetic parameters reported for rutoside. |
| popPK | Morquette_2021 | irrelevant | 0 | 0 | The paper is a clinical case report on the therapeutic efficacy of rutoside for a dermatological condition and contains no pharmacokinetic data or disposition parameters. |
| popPK | Méabed_2018 | irrelevant | 0 | 0 | The study evaluates the giardicidal effectiveness of a plant extract and does not report pharmacokinetic parameters for rutoside. |
| PD | Müller_1998 | not_relevant | 1 | 0 | The paper reports an IC50 for the whole plant extract, not for rutoside specifically, and explicitly states that rutoside did not mediate the leukotriene inhibition; no numeric PD parameters for rutoside are provided. |
| popPK | Nocker_1987 | irrelevant | 0 | 0 | no_text gate: only 71 chars of text extracted (&lt; 400) |
| popPK | Nocker_1989 | irrelevant | 0 | 0 | The study is a clinical efficacy trial measuring edema reduction and does not report any pharmacokinetic parameters for rutoside. |
| PD | Nocker_1989 | not_relevant | 3 | 2 | The study is a dose-response trial but reports only qualitative/summary outcomes (significant decrease vs placebo, no difference between dose groups) without providing numeric concentration-effect data, PK parameters, or fitted PD model parameters (Emax, EC50, etc.). |
| popPK | Nurfaradilla_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of captopril in rats, not rutoside. |
| popPK | Ollech_2020 | irrelevant | 0 | 0 | The paper is a clinical retrospective cohort study on the treatment of pigmented purpuric dermatosis, not a pharmacokinetic study, and contains no PK parameters for rutoside. |
| PGx | Paczkowska-Walendowska_2026 | not_relevant | 0 | 0 | The paper is a general review of the health benefits of Japanese Pearl Tree and mentions rutoside only as a bioactive compound, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| PD | Raman_2024 | not_relevant | 2 | 3 | Only an in vitro enzyme-inhibition IC50 (Rutin 17.50 μM vs 3CL protease) from a docking/MD study; no in vivo exposure- or dose-response/PK-PD relationship for rutoside. |
| popPK | Ramaswamy_2017 | irrelevant | 0 | 0 | The study focuses on curcumin and rutin, not rutoside, and does not report quantitative PK parameters for rutoside. |
| popPK | Rashid_2024 | irrelevant | 0 | 0 | The study focuses on rutin (a different flavonoid) and other drugs for SARS-CoV-2, not rutoside, and provides no quantitative PK parameters for rutoside. |
| popPK | STRUBELT_1963 | irrelevant | 0 | 0 | no_text gate: only 87 chars of text extracted (&lt; 400) |
| popPK | Salama_2026 | irrelevant | 0 | 0 | The study focuses on rutin (a different flavonoid), not rutoside, and reports in-vitro release and behavioral data rather than pharmacokinetic parameters. |
| popPK | Seo_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Cudrania tricuspidata leaf extract components (quercetin and kaempferol), not rutoside. |
| popPK | Sharma_2020 | irrelevant | 2 | 0 | The study focuses on rutin (a different compound) in rats and reports only relative bioavailability ratios (AUC/Cmax) without absolute quantitative PK parameters (CL, V, t1/2) for rutoside. |
| popPK | Shi_2022 | irrelevant | 2 | 1 | The study focuses on Safflower Injection ingredients (HSYA, SYR, etc.) in rats, and while Rutin (RU) is mentioned as a component, no quantitative PK parameters for Rutin are reported in the provided evidence. |
| popPK | Song_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme inhibition by bioflavonoids (including rutin, a related compound) and does not report pharmacokinetic parameters for rutoside. |
| popPK | Song_2022 | irrelevant | 0 | 0 | The paper describes an electrochemical biosensor for the detection of rutin (a different compound, not rutoside) and does not report pharmacokinetic parameters. |
| popPK | Tang_2019 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of a traditional Chinese medicine extract on cognitive impairment in mice and does not report pharmacokinetic parameters for rutoside. |
| popPK | Tao_2024 | irrelevant | 0 | 0 | The paper is a review of the plant Lindera aggregata and does not report pharmacokinetic parameters for rutoside. |
| PGx | Thakur_2025 | not_relevant | 0 | 0 | The paper is a network pharmacology study exploring the mechanism of action of rutin against nephropathy and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Tian_2022 | irrelevant | 0 | 0 | The study investigates rutin, a different flavonoid compound, not rutoside. |
| popPK | Wahnou_2024 | irrelevant | 0 | 0 | The study is a computational analysis of Artemisia herba alba compounds for IBD-associated arthritis and does not report pharmacokinetic parameters for rutoside. |
| popPK | Wahnou_2025 | irrelevant | 0 | 0 | The study focuses on Artemisia herba alba extract and its components (including rutin, not rutoside) in a colitis model, with no PK parameters for rutoside. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The study focuses on flavonoids from Chimonanthus nitens (rutin, nicotiflorin, astragalin, kaempferol) and does not report pharmacokinetic parameters for rutoside. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The study investigates the mechanism of a traditional Chinese medicine prescription in sepsis-associated encephalopathy, using rutin (a related flavonoid) only as a tool compound to suppress VCAM-1, and does not report pharmacokinetic parameters for rutoside. |
| popPK | Wu_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Rutin, not Rutoside, which is a different chemical entity. |
| popPK | Yang_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of sophoraflavanone G and kurarinone, not rutoside. |
| popPK | Yao_2019 | irrelevant | 0 | 0 | The paper is a review of the anti-inflammatory activity of Polyalthia species and does not report pharmacokinetic parameters for rutoside. |
| popPK | Yu_2026 | irrelevant | 0 | 0 | The study focuses on the neuroprotective and anti-amyloid mechanisms of cerium-rutin nanoparticles in an Alzheimer's disease model, not on the pharmacokinetic parameters of rutoside. |
| popPK | Zeng_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of chlorogenic acid and rutin, not rutoside. |
| popPK | Zhang_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Mori Folium constituents (including rutin, a rutoside precursor/analogue) in rats, but does not report PK parameters for rutoside itself. |
| popPK | Zhang_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of oseltamivir and its interaction with Radix Scutellariae, not rutoside. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The study focuses on a nanodrug formulation (RCPM) containing rutin (a related flavonoid, not rutoside) for cancer therapy and does not report pharmacokinetic parameters for rutoside. |
| popPK | Zhao_2021 | irrelevant | 0 | 0 | The study focuses on rutin (a different drug) and its metabolites, not rutoside, and no quantitative PK parameters for rutoside are reported. |
| popPK | Zheng_2026 | irrelevant | 0 | 0 | The study investigates the immunomodulatory mechanism of rutin (a rutoside component) in macrophages and Salmonella infection, not its pharmacokinetic disposition parameters. |
| popPK | Zhou_2023 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of rutin (not rutoside) on glycosylation inhibition, containing no pharmacokinetic parameters. |
| popPK | de_2021 | irrelevant | 0 | 0 | The study is an in silico evaluation of flavonoids in açaí fruit and does not report quantitative pharmacokinetic parameters for rutoside. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 22:23 UTC</sub>
