<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;hydromorphone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Hydromorphone_Balyan2020_reference&quot;,&quot;label&quot;:&quot;Balyan_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydromorphone/Hydromorphone_Balyan2020_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydromorphone_Guedes2008_reference&quot;,&quot;label&quot;:&quot;Guedes_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydromorphone/Hydromorphone_Guedes2008_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydromorphone_Meissner2025_reference&quot;,&quot;label&quot;:&quot;Meissner_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydromorphone/Hydromorphone_Meissner2025_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydromorphone_Wimbish2024_reference&quot;,&quot;label&quot;:&quot;Wimbish_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydromorphone/Hydromorphone_Wimbish2024_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# hydromorphone

- **generic name:** hydromorphone
- **ATC codes:** `N02AA03`, `N02AA53`, `N02AG04`
- **DrugBank:** [DB00327](https://go.drugbank.com/drugs/DB00327) · **PubChem:** [CID 5284570](https://pubchem.ncbi.nlm.nih.gov/compound/5284570)
- **molar mass:** 285.3377 g/mol (C17H19NO3) — DrugBank
- **groups:** approved, illicit, investigational

## About

Hydromorphone is an opioid painkiller used to relieve pain, and has also been used for cough. It is an approved medicine used widely for pain relief, though as a controlled opioid its availability is restricted.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q303646](https://www.wikidata.org/wiki/Q303646) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| hydromorphone | parent | 285.338 | C17H19NO3 | DrugBank | [5284570](https://pubchem.ncbi.nlm.nih.gov/compound/5284570) | Balyan_2020, Guedes_2008, Hech_2024, Jeleazcov_2014, Meissner_2025 |
| morphine | metabolite | 285.343 | C17H19NO3 | PubChem | [5479215](https://pubchem.ncbi.nlm.nih.gov/compound/5479215) | Meissner_2025 |
| morphine-glucuronides | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:10 | 2:33 | 4/2/0 | 1/0/0 | 0/0/0 | 162,193/19,386 | einfracz / qwen3.8-27b | 12 | 5/0 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Balyan_2020_reference](drugs/drug_hydromorphone/Hydromorphone_Balyan2020_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Balyan R et al., Hydromorphone population pharmacokineti…, Paediatric anaesthesia (2020) | [10.1111/pan.13975](https://doi.org/10.1111/pan.13975) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Guedes_2008_reference](drugs/drug_hydromorphone/Hydromorphone_Guedes2008_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Guedes AG et al., Pharmacokinetics and physiological effe…, Journal of veterinary pharm… (2008) | [10.1111/j.1365-2885.2008.00966.x](https://doi.org/10.1111/j.1365-2885.2008.00966.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Meissner_2025_reference](drugs/drug_hydromorphone/Hydromorphone_Meissner2025_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Meissner K et al., Morphine and hydromorphone pharmacokine…, British journal of anaesthe… (2025) | [10.1016/j.bja.2024.08.042](https://doi.org/10.1016/j.bja.2024.08.042) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.786). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">dog</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Wimbish_2024_reference](drugs/drug_hydromorphone/Hydromorphone_Wimbish2024_reference.md) | ▶ model + simulator | 2-compartment, IV | 3 | Wimbish C et al., Pharmacokinetics of a continuous intrav…, Frontiers in veterinary sci… (2024) | [10.3389/fvets.2024.1362730](https://doi.org/10.3389/fvets.2024.1362730) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Hech_2024_reference](drugs/drug_hydromorphone/Hydromorphone_Hech2024_reference.md) | — | 1-compartment (no model) | 3 | Hech B et al., Pharmacokinetics of hydrorphone hydroch…, Veterinary anaesthesia and… (2024) | [10.1016/j.vaa.2023.11.009](https://doi.org/10.1016/j.vaa.2023.11.009) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Jeleazcov_2014_reference](drugs/drug_hydromorphone/Hydromorphone_Jeleazcov2014_reference.md) | — | 1-compartment (no model) | 1 | Jeleazcov C et al., Population pharmacokinetic modeling of…, Anesthesiology (2014) | [10.1097/ALN.0b013e3182a76d05](https://doi.org/10.1097/ALN.0b013e3182a76d05) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Nordmeier_2022_MOR_activation](drugs/drug_hydromorphone/pd_Nordmeier_2022_MOR_activation.md) | MOR activation ← hydromorphone · direct sigmoid Emax (Hill) effect | — | Nordmeier F et al., Are the N-demethylated metabolites of U…, Drug testing and analysis (2022) | [10.1002/dta.3182](https://doi.org/10.1002/dta.3182) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=hydromorphone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | kidney | `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP2C9` substrate, `UGT1A3` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `UGT2B7` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: OPRD1 (partial agonist), OPRK1 (target), OPRM1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 43 matched, 20 returned
- **screened:** 8  ·  **relevant:** 8
- **records:** 6  ·  extracted 4  ·  needs_review 0  ·  rejected 2  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Balyan_2020.pdf` | Balyan R et al., Hydromorphone population pharmacokineti…, Paediatric anaesthesia (2020) | popPK | 10 | [10.1111/pan.13975](https://doi.org/10.1111/pan.13975) | [32702184](https://pubmed.ncbi.nlm.nih.gov/32702184) | The abstract explicitly reports quantitative population pharmacokinetic parameter estimates (clearance, volume, intercompartmental clearance) for hydromorphone. |
| `Guedes_2008.pdf` | Guedes AG et al., Pharmacokinetics and physiological effe…, Journal of veterinary pharm… (2008) | popPK | 10 | [10.1111/j.1365-2885.2008.00966.x](https://doi.org/10.1111/j.1365-2885.2008.00966.x) | [18638294](https://pubmed.ncbi.nlm.nih.gov/18638294) | The study reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-life) for hydromorphone in conscious dogs. |
| `Hech_2024.pdf` | Hech B et al., Pharmacokinetics of hydrorphone hydroch…, Veterinary anaesthesia and… (2024) | popPK | 10 | [10.1016/j.vaa.2023.11.009](https://doi.org/10.1016/j.vaa.2023.11.009) | [38158281](https://pubmed.ncbi.nlm.nih.gov/38158281) | The study reports quantitative PK parameters (clearance, volume of distribution, half-life, bioavailability) for hydromorphone in ferrets within the abstract text. |
| `Jeleazcov_2014.pdf` | Jeleazcov C et al., Population pharmacokinetic modeling of…, Anesthesiology (2014) | popPK | 10 | [10.1097/ALN.0b013e3182a76d05](https://doi.org/10.1097/ALN.0b013e3182a76d05) | [23958818](https://pubmed.ncbi.nlm.nih.gov/23958818) | The paper reports a full population pharmacokinetic model for hydromorphone in humans with specific numeric values for clearance, volume, and intercompartmental clearance clearly stated in the abstract. |
| `Reed_2019_2.pdf` | Reed R et al., The pharmacokinetics and pharmacodynami…, Veterinary anaesthesia and… (2019) | popPK | 10 | [10.1016/j.vaa.2018.11.001](https://doi.org/10.1016/j.vaa.2018.11.001) | [30930095](https://pubmed.ncbi.nlm.nih.gov/30930095) | The paper reports quantitative non-compartmental PK parameters (t1/2, CL, Vdss) for hydromorphone in horses with specific numeric values provided in the abstract. |
| `Sanchez-Migallon_2020.pdf` | Sanchez-Migallon Guzman D et al., Pharmacokinetics of hydromorphone hydro…, American journal of veterin… (2020) | popPK | 10 | [10.2460/ajvr.81.11.894](https://doi.org/10.2460/ajvr.81.11.894) | [33107746](https://pubmed.ncbi.nlm.nih.gov/33107746) | The study reports explicit quantitative pharmacokinetic parameters (clearance, volume of distribution, half-life, bioavailability) for hydromorphone in parrots, all of which are present in the provided abstract text. |

<sub>queue written 2026-10-07T05:08:27.987198+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Browder_2022 | irrelevant | 0 | 0 | The study compares dosing requirements rather than reporting quantitative pharmacokinetic parameters (CL, V, ka) for hydromorphone. |
| popPK | Fogarty_2022 | irrelevant | 0 | 0 | The study focuses on the toxicology and in vitro pharmacology of cinnamylpiperazines, using hydromorphone only as a reference compound for relative efficacy, without reporting any pharmacokinetic parameters for hydromorphone. |
| popPK | Guenther_2020 | irrelevant | 4 | 0 | The study involves a prodrug of hydromorphone and reports PK changes (Cmax/AUC) but does not provide specific quantitative disposition parameters (CL, V, ka) or a compartmental model for hydromorphone itself in the provided evidence. |
| popPK | Jeleazcov_2016 | irrelevant | 4 | 0 | The paper focuses on clinical efficacy and PK/PD modeling (EC50) rather than reporting primary quantitative population PK parameters (CL, V) in the text; previous PK model is referenced but not detailed here. |
| popPK | Madia_2012 | irrelevant | 0 | 0 | The study examines GTPγS binding and opioid tolerance mechanisms in mouse spinal cord membranes, not pharmacokinetic disposition parameters. |
| popPK | Manabe_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of receptor signaling pathways (G protein vs. beta-arrestin) and does not report pharmacokinetic parameters. |
| popPK | Nasser_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of buprenorphine (RBP-6000), with hydromorphone used only as a probe drug for agonist blockade assessment, not as the subject of PK modeling. |
| popPK | Nordmeier_2022 | irrelevant | 0 | 0 | This is an in vitro pharmacodynamic study measuring MOR activation potency (EC50) of U-47700, using hydromorphone only as a reference standard rather than a subject of PK analysis. |
| popPK | Vandeputte_2020 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of new psychoactive substances where hydromorphone is used only as a reference compound, reporting no pharmacokinetic parameters. |
| popPK | Vandeputte_2022 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of synthetic opioids at the receptor level, not a pharmacokinetic study, and hydromorphone is used only as a reference agonist. |
| popPK | Walsh_2024 | irrelevant | 0 | 0 | The study models the pharmacodynamics of buprenorphine (blockade of hydromorphone effects) and does not report pharmacokinetic parameters for hydromorphone itself, which is used only as a probe drug. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 05:08 UTC</sub>
