<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;valganciclovir&quot;}]"></div>

# valganciclovir

- **generic name:** valganciclovir
- **ATC codes:** `J05AB14`
- **DrugBank:** [DB01610](https://go.drugbank.com/drugs/DB01610) · **PubChem:** [CID 64147](https://pubchem.ncbi.nlm.nih.gov/compound/64147)
- **molar mass:** 354.3617 g/mol (C14H22N6O5) — DrugBank
- **groups:** approved, investigational

## About

Valganciclovir is an antiviral drug used to treat cytomegalovirus retinitis. It is an approved medicine and is included on the WHO list of essential medicines, so it is used widely around the world.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423384](https://www.wikidata.org/wiki/Q423384) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| valganciclovir | parent | 354.362 | C14H22N6O5 | DrugBank | [64147](https://pubchem.ncbi.nlm.nih.gov/compound/64147) | Czock_2002, Dvořáčková_2026, Itohara_2025 |
| ganciclovir | metabolite | 255.234 | C9H13N5O4 | PubChem | [135398740](https://pubchem.ncbi.nlm.nih.gov/compound/135398740) | Czock_2002, Dvořáčková_2026, Itohara_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:44 | 5:31 | 0/15/0 | 0/0/1 | 0/0/0 | 279,095/14,260 | ollama / glm-5.3-flash | 6 | 2/4 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Czock_2002_reference](drugs/drug_valganciclovir/Valganciclovir_Czock2002_reference.md) | — | 1-compartment (no model) | 4 | Czock D et al., Pharmacokinetics of valganciclovir and…, Clinical pharmacology and t… (2002) | [10.1067/mcp.2002.126306](https://doi.org/10.1067/mcp.2002.126306) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Dvořáčková_2026_reference](drugs/drug_valganciclovir/Valganciclovir_Dvokov2026_reference.md) | — | general linear (no model) | 7 (+1 cov.) | Dvořáčková E et al., Population Pharmacokinetics and Dose Op…, Medical principles and prac… (2026) | [10.1159/000548942](https://doi.org/10.1159/000548942) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C7 apparent-parameter coherence violated (double correction)</sub><br><sub>route_to: `human_review`</sub> | [Itohara_2025_reference](drugs/drug_valganciclovir/Valganciclovir_Itohara2025_reference.md) | — | 1-compartment (no model) | 5 | Itohara K et al., Pharmacokinetic and Pharmacodynamic Ass…, Therapeutic drug monitoring (2025) | [10.1097/FTD.0000000000001257](https://doi.org/10.1097/FTD.0000000000001257) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Märtson_2022_reference](drugs/drug_valganciclovir/Valganciclovir_Mrtson2022_reference.md) | — | 2-compartment (no model) | 5 | Märtson AG et al., Therapeutic Drug Monitoring of Ganciclo…, Therapeutic drug monitoring (2022) | [10.1097/FTD.0000000000000925](https://doi.org/10.1097/FTD.0000000000000925) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Yang_2023_acosta_et_al_20](drugs/drug_valganciclovir/Valganciclovir_Yang2023_acosta_et_al_20.md) | — | 1-compartment (no model) | 0 | Yang W et al., Establishment and Evaluation of a Param…, Pharmaceutics (2023) | [10.3390/pharmaceutics15071801](https://doi.org/10.3390/pharmaceutics15071801) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Yang_2023_cald_s_et_al_21](drugs/drug_valganciclovir/Valganciclovir_Yang2023_cald_s_et_al_21.md) | — | 1-compartment (no model) | 0 | Yang W et al., Establishment and Evaluation of a Param…, Pharmaceutics (2023) | [10.3390/pharmaceutics15071801](https://doi.org/10.3390/pharmaceutics15071801) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Yang_2023_chen_et_al_26](drugs/drug_valganciclovir/Valganciclovir_Yang2023_chen_et_al_26.md) | — | 1-compartment (no model) | 0 | Yang W et al., Establishment and Evaluation of a Param…, Pharmaceutics (2023) | [10.3390/pharmaceutics15071801](https://doi.org/10.3390/pharmaceutics15071801) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Yang_2023_franck_et_al_9](drugs/drug_valganciclovir/Valganciclovir_Yang2023_franck_et_al_9.md) | — | 1-compartment (no model) | 0 | Yang W et al., Establishment and Evaluation of a Param…, Pharmaceutics (2023) | [10.3390/pharmaceutics15071801](https://doi.org/10.3390/pharmaceutics15071801) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Yang_2023_krens_et_al_10](drugs/drug_valganciclovir/Valganciclovir_Yang2023_krens_et_al_10.md) | — | 1-compartment (no model) | 0 | Yang W et al., Establishment and Evaluation of a Param…, Pharmaceutics (2023) | [10.3390/pharmaceutics15071801](https://doi.org/10.3390/pharmaceutics15071801) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Yang_2023_lalagkas_et_al_27](drugs/drug_valganciclovir/Valganciclovir_Yang2023_lalagkas_et_al_27.md) | — | 1-compartment (no model) | 0 | Yang W et al., Establishment and Evaluation of a Param…, Pharmaceutics (2023) | [10.3390/pharmaceutics15071801](https://doi.org/10.3390/pharmaceutics15071801) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Yang_2023_li_et_al_29](drugs/drug_valganciclovir/Valganciclovir_Yang2023_li_et_al_29.md) | — | 1-compartment (no model) | 0 | Yang W et al., Establishment and Evaluation of a Param…, Pharmaceutics (2023) | [10.3390/pharmaceutics15071801](https://doi.org/10.3390/pharmaceutics15071801) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Yang_2023_nguyen_et_al_11](drugs/drug_valganciclovir/Valganciclovir_Yang2023_nguyen_et_al_11.md) | — | 1-compartment (no model) | 0 | Yang W et al., Establishment and Evaluation of a Param…, Pharmaceutics (2023) | [10.3390/pharmaceutics15071801](https://doi.org/10.3390/pharmaceutics15071801) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Yang_2023_vezina_et_al_25](drugs/drug_valganciclovir/Valganciclovir_Yang2023_vezina_et_al_25.md) | — | 1-compartment (no model) | 0 | Yang W et al., Establishment and Evaluation of a Param…, Pharmaceutics (2023) | [10.3390/pharmaceutics15071801](https://doi.org/10.3390/pharmaceutics15071801) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Yang_2023_zhao_et_al_23](drugs/drug_valganciclovir/Valganciclovir_Yang2023_zhao_et_al_23.md) | — | 1-compartment (no model) | 0 | Yang W et al., Establishment and Evaluation of a Param…, Pharmaceutics (2023) | [10.3390/pharmaceutics15071801](https://doi.org/10.3390/pharmaceutics15071801) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Yang_2023_zhou_et_al_19](drugs/drug_valganciclovir/Valganciclovir_Yang2023_zhou_et_al_19.md) | — | 1-compartment (no model) | 0 | Yang W et al., Establishment and Evaluation of a Param…, Pharmaceutics (2023) | [10.3390/pharmaceutics15071801](https://doi.org/10.3390/pharmaceutics15071801) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Koloskoff_2025_CMV_viral_load](drugs/drug_valganciclovir/pd_Koloskoff_2025_CMV_viral_load.md) | CMV viral load ← ganciclovir · indirect response — drug stimulates the loss of CMV viral load | — | Koloskoff K et al., Pharmacokinetic/Pharmacodynamic Modelli…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01526-z](https://doi.org/10.1007/s40262-025-01526-z) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=valganciclovir) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `SLC15A1` unknown | DrugBank actor |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC15A2` unknown | DrugBank actor |

<sub>Actors without a tissue in the table: DNA (adduct), SLC6A14 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 50 matched, 15 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 15  ·  extracted 0  ·  needs_review 0  ·  rejected 15  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Facchin_2019.pdf` | Facchin A et al., Population pharmacokinetics of ganciclo…, Antimicrobial agents and ch… (2019) | popPK | 10 | [10.1128/AAC.01192-19](https://doi.org/10.1128/AAC.01192-19) | [31527022](https://pubmed.ncbi.nlm.nih.gov/31527022) | Population PK model of ganciclovir after valganciclovir in children, but numeric parameter values (CL, V) are not given in the evidence, only covariate effects. |
| `Cojutti_2023.pdf` | Cojutti PG et al., Population Pharmacokinetic and Pharmaco…, Antimicrobial agents and ch… (2023) | popPK | 9 | [10.1128/aac.01665-22](https://doi.org/10.1128/aac.01665-22) | [36815856](https://pubmed.ncbi.nlm.nih.gov/36815856) | A population PK model of valganciclovir (ganciclovir concentrations) in kidney transplant patients, but the abstract gives no numeric CL/V/ka values — parameters likely in tables/supplementary material not provided. |
| `Czock_2002.pdf` | Czock D et al., Pharmacokinetics of valganciclovir and…, Clinical pharmacology and t… (2002) | popPK | 9 | [10.1067/mcp.2002.126306](https://doi.org/10.1067/mcp.2002.126306) | [12189361](https://pubmed.ncbi.nlm.nih.gov/12189361) | Human PK study of valganciclovir/ganciclovir with compartmental model and numeric parameters (bioavailability, Cmax, t½) present in abstract, though full parameter set may be in tables. |

<sub>queue written 2026-10-07T16:39:25.413252+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cojutti_2023 | relevant | 9 | 2 | A population PK model of valganciclovir (ganciclovir concentrations) in kidney transplant patients, but the abstract gives no numeric CL/V/ka values — parameters likely in tables/supplementary material not provided. |
| popPK | Facchin_2019 | relevant | 10 | 4 | Population PK model of ganciclovir after valganciclovir in children, but numeric parameter values (CL, V) are not given in the evidence, only covariate effects. |
| popPK | Hahn_2018 | irrelevant | 0 | 0 | This is an in-vitro antiviral mechanism study of pyrrolopyridine compounds; valganciclovir is only mentioned as standard therapy, with no PK parameters. |
| popPK | Hutterer_2017 | irrelevant | 0 | 0 | This is an in-vitro antiviral efficacy study of DYRK inhibitors; valganciclovir is only mentioned as background therapy, with no PK parameters. |
| popPK | Koloskoff_2025 | irrelevant | 3 | 2 | This is a pharmacodynamic (viral turnover) modeling study; the PK model parameters (CL, V, ka) come from a prior published model (Franck et al.) and were fixed, with no numeric disposition parameter values reported here (PK figures live in supplementary material). |
| popPK | Lynch_2025 | irrelevant | 0 | 0 | This is a systematic review of antibiotic PK in obesity; valganciclovir is not studied and no valganciclovir parameters appear. |
| popPK | Selby_2023 | irrelevant | 2 | 3 | This is a population PK study of intravenous ganciclovir itself, not valganciclovir, and no numeric parameter values (CL, V, Q) appear in the evidence provided. |
| popPK | Stockmann_2015 | irrelevant | 3 | 1 | This is a narrative review of ganciclovir/valganciclovir PK in children; no original quantitative disposition parameters are reported, only cited AUC targets. |
| popPK | Tollefson_2022 | irrelevant | 0 | 0 | In-vitro antiviral potency study (EC50) where valganciclovir is only a comparator; no PK parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 16:39 UTC</sub>
