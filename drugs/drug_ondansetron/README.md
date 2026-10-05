<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A04A&quot;,&quot;href&quot;:&quot;atc/A04A.md&quot;},{&quot;label&quot;:&quot;ondansetron&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ondansetron_Chiang2021_estimate&quot;,&quot;label&quot;:&quot;Chiang_2021_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ondansetron/Ondansetron_Chiang2021_estimate.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ondansetron_Chiang2021v2_reference&quot;,&quot;label&quot;:&quot;Chiang_2021_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ondansetron/Ondansetron_Chiang2021v2_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ondansetron_Landau2026_reference&quot;,&quot;label&quot;:&quot;Landau_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ondansetron/Ondansetron_Landau2026_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# ondansetron

- **generic name:** ondansetron
- **ATC codes:** `A04AA01`
- **DrugBank:** [DB00904](https://go.drugbank.com/drugs/DB00904) · **PubChem:** [CID 4595](https://pubchem.ncbi.nlm.nih.gov/compound/4595)
- **molar mass:** 293.363 g/mol (C18H19N3O) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Ondansetron is an antiemetic used to prevent and treat nausea and vomiting, including in gastroenteritis. It is widely used and is included on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q410011](https://www.wikidata.org/wiki/Q410011) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ondansetron | parent | 293.363 | C18H19N3O | DrugBank | [4595](https://pubchem.ncbi.nlm.nih.gov/compound/4595) | Baek_2015, Chiang_2021_2, Lam_2025, de_1998 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 14:22 | 17:15 | 3/5/0 | 1/0/1 | 0/0/0 | 348,970/54,413 | ollama / qwen3.8:27b-mtp-q8_0 | 20 | 16/2 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Chiang_2021_estimate](drugs/drug_ondansetron/Ondansetron_Chiang2021_estimate.md) | ▶ model + simulator | 2-compartment, IV | 6 | Chiang MD et al., Plasma and cerebrospinal fluid pharmaco…, British journal of clinical… (2021) | [10.1111/bcp.14412](https://doi.org/10.1111/bcp.14412) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.444). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Chiang_2021_2_reference](drugs/drug_ondansetron/Ondansetron_Chiang2021v2_reference.md) | ▶ model + simulator | 2-compartment, IV | 6 | Chiang MD et al., Plasma and cerebrospinal fluid pharmaco…, British journal of clinical… (2021) | [10.1111/bcp.14412](https://doi.org/10.1111/bcp.14412) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">dog</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Landau_2026_reference](drugs/drug_ondansetron/Ondansetron_Landau2026_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Landau ED et al., The Pharmacokinetics of Intravenous and…, Journal of veterinary pharm… (2026) | [10.1111/jvp.70058](https://doi.org/10.1111/jvp.70058) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">dog</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Baek_2015_reference](drugs/drug_ondansetron/Ondansetron_Baek2015_reference.md) | — | 1-compartment (no model) | 5 | Baek IH et al., Pharmacokinetic modeling and Monte Carl…, Journal of veterinary pharm… (2015) | [10.1111/jvp.12147](https://doi.org/10.1111/jvp.12147) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: split column 'shrinkage (%)' is a table statistic/structure column, not a study…</sub><br><sub>route_to: `human_review`</sub> | [Chiang_2021_shrinkage](drugs/drug_ondansetron/Ondansetron_Chiang2021_shrinkage.md) | — | 1-compartment (no model) | 3 | Chiang MD et al., Plasma and cerebrospinal fluid pharmaco…, British journal of clinical… (2021) | [10.1111/bcp.14412](https://doi.org/10.1111/bcp.14412) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.381). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Chiang_2024_reference](drugs/drug_ondansetron/Ondansetron_Chiang2024_reference.md) | — | 1-compartment (no model) | 2 | Chiang M et al., Pharmacokinetic Modeling of the Effect…, Pharmaceutical research (2024) | [10.1007/s11095-024-03739-6](https://doi.org/10.1007/s11095-024-03739-6) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.818). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Lam_2025_reference](drugs/drug_ondansetron/Ondansetron_Lam2025_reference.md) | — | 2-compartment (no model) | 6 | Lam K et al., Bayesian Population Pharmacokinetic Mod…, Clinical and translational… (2025) | [10.1111/cts.70147](https://doi.org/10.1111/cts.70147) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.7). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [de_1998_reference](drugs/drug_ondansetron/Ondansetron_de1998_reference.md) | — | 1-compartment (no model) | 1 | de Alwis DP et al., Population pharmacokinetics of ondanset…, British journal of clinical… (1998) | [10.1046/j.1365-2125.1998.00756.x](https://doi.org/10.1046/j.1365-2125.1998.00756.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span> | [Komatsu_2019_QTca](drugs/drug_ondansetron/pd_Komatsu_2019_QTca.md) | vehicle-adjusted change in QTca from baseline ← ondansetron · direct linear effect | — | Komatsu R et al., Exposure-response analysis of drug-indu…, Journal of pharmacological… (2019) | [10.1016/j.vascn.2019.106606](https://doi.org/10.1016/j.vascn.2019.106606) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Cox_1999_hazard_of_emesis](drugs/drug_ondansetron/pd_Cox_1999_hazard_of_emesis.md) | hazard of emesis ← ondansetron · time-to-event model | — | Cox EH et al., A population pharmacokinetic-pharmacody…, Journal of pharmacokinetics… (1999) | [10.1023/a:1020930626404](https://doi.org/10.1023/a:1020930626404) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ondansetron) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor/substrate, `CYP2C9` substrate, `CYP2D6` substrate, `CYP2E1` substrate, `CYP3A4` substrate, `CYP3A5` substrate, `CYP3A7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: HTR1A (other/unknown), HTR1B (other/unknown), HTR3A (target), HTR4 (target), OPRM1 (other/unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 79 matched, 20 returned
- **screened:** 21  ·  **relevant:** 7
- **records:** 8  ·  extracted 3  ·  needs_review 0  ·  rejected 5  ·  stale 6
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Baek_2015.pdf` | Baek IH et al., Pharmacokinetic modeling and Monte Carl…, Journal of veterinary pharm… (2015) | popPK | 10 | [10.1111/jvp.12147](https://doi.org/10.1111/jvp.12147) | [25131428](https://pubmed.ncbi.nlm.nih.gov/25131428) | The study reports quantitative PK parameters (Cmax, AUC, half-life) for ondansetron in dogs, though specific clearance and volume values are not explicitly listed in the provided text. |
| `Rojanasthien_1999.pdf` | Rojanasthien N et al., Pharmacokinetics and bioequivalence tes…, International journal of cl… (1999) | popPK | 10 | not captured | [10584976](https://pubmed.ncbi.nlm.nih.gov/10584976) | The study reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-life) for ondansetron in humans. |

<sub>queue written 2026-10-04T14:07:01.353059+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aguado-Sierra_2024 | irrelevant | 0 | 0 | The study is an in silico cardiac electrophysiology simulation using ondansetron as a reference compound for QT prolongation, not a pharmacokinetic study reporting disposition parameters. |
| PD | Aguado-Sierra_2024 | not_relevant | 0 | 0 | The paper describes an in silico computational model for QT exposure-response but does not report specific numeric PD parameters (e.g., Emax, EC50) for ondansetron in the provided text. |
| popPK | Cox_1999 | irrelevant | 2 | 0 | The paper focuses on pharmacodynamic modeling of antiemetic effect (time-to-event) and reports PD parameters (EC50, hazard rate) rather than quantitative pharmacokinetic disposition parameters (CL, V, ka) for ondansetron. |
| popPK | Deb_2023 | irrelevant | 0 | 0 | The study is an in silico simulation of drug-drug interactions and does not report quantitative pharmacokinetic disposition parameters (CL, V, etc.) for ondansetron. |
| PD | Deb_2023 | not_relevant | 0 | 0 | The paper is an in silico simulation of drug-drug interactions (DDI) focusing on CYP enzyme kinetics (PK), and does not report any pharmacodynamic (PD) or exposure-response relationship for ondansetron. |
| popPK | Downie_1995 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of 5-HT3 receptor modulation by alcohols, not a pharmacokinetic study of ondansetron. |
| PD | Downie_1995 | not_relevant | 0 | 0 | The paper investigates the interaction of trichloroethanol with 5-HT3 receptors and does not report a pharmacodynamic or exposure-response relationship for ondansetron. |
| popPK | Faisal_2020 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of azithromycin's effects on smooth muscle, where ondansetron is used only as a pharmacological antagonist, not as the subject of PK analysis. |
| PD | Faisal_2020 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of azithromycin, using ondansetron only as a fixed-concentration antagonist to probe mechanism, without reporting any exposure-response or dose-response parameters for ondansetron itself. |
| popPK | Komatsu_2019 | irrelevant | 1 | 0 | The study focuses on exposure-response analysis for QT prolongation in monkeys and does not report quantitative pharmacokinetic disposition parameters (CL, V, etc.) for ondansetron. |
| popPK | Lee_2016 | irrelevant | 0 | 0 | The study characterizes the pharmacokinetics of ramosetron, with ondansetron serving only as a clinical comparator for anti-emetic efficacy. |
| popPK | Thompson_2024 | irrelevant | 0 | 0 | The study models the pharmacokinetics of cisplatin (total platinum), not ondansetron, which is only a covariate/comparator. |
| popPK | Thompson_2025 | irrelevant | 0 | 0 | The study models the pharmacokinetics of cisplatin (platinum), not ondansetron, which is only a co-administered antiemetic. |
| popPK | Wittmann_2006 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of morphine's effect on 5-HT3 receptors, using ondansetron only as a reference antagonist, and reports no pharmacokinetic parameters for ondansetron. |
| PD | Wittmann_2006 | not_relevant | 0 | 0 | The paper investigates the effect of morphine on 5-HT3 receptors; ondansetron is used only as a control antagonist at a single concentration (0.3 nM) without reporting a dose-response curve or numeric PD parameters for ondansetron. |
| popPK | Xu_2007 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of serotonin-induced contraction in guinea-pig colonic myocytes, using ondansetron only as a receptor antagonist, and reports no pharmacokinetic parameters. |
| PD | Xu_2007 | not_relevant | 2 | 1 | The paper reports a dose-response for 5-HT (EC50 provided) and qualitatively states that ondansetron blocks 5-HT effects, but it does not provide numeric PD parameters (e.g., Ki, IC50, or concentration-effect curve) for ondansetron itself. |
| popPK | Ye_1999 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of ondansetron's mechanism of action on glycine receptors, reporting no pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 14:07 UTC</sub>
