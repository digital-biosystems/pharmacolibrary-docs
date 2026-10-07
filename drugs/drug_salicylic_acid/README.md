<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D01A&quot;,&quot;href&quot;:&quot;atc/D01A.md&quot;},{&quot;label&quot;:&quot;salicylic acid&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SalicylicAcid_Mathurkar2018_reference&quot;,&quot;label&quot;:&quot;Mathurkar_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salicylic_acid/SalicylicAcid_Mathurkar2018_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# salicylic acid

- **generic name:** salicylic acid
- **ATC codes:** `D01AE12`, `S01BC08`
- **DrugBank:** [DB00936](https://go.drugbank.com/drugs/DB00936) · **PubChem:** [CID 338](https://pubchem.ncbi.nlm.nih.gov/compound/338)
- **molar mass:** 138.1207 g/mol (C7H6O3) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Salicylic acid is a keratolytic and antifungal agent used topically for skin conditions such as acne, warts, seborrhoeic dermatitis, and other dermatoses. It is widely used, appears on the WHO list of essential medicines, and is also approved for veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q193572](https://www.wikidata.org/wiki/Q193572) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| salicylic acid | parent | 138.121 | C7H6O3 | DrugBank | [338](https://pubchem.ncbi.nlm.nih.gov/compound/338) | Koh_2025 |
| acetylsalicylic acid | metabolite | 180.159 | C9H8O4 | PubChem | [2244](https://pubchem.ncbi.nlm.nih.gov/compound/2244) | Koh_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:22 | 17:08 | 1/1/1 | 1/0/0 | 0/0/0 | 280,841/45,026 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 2/5 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span> | [Mathurkar_2018_reference](drugs/drug_salicylic_acid/SalicylicAcid_Mathurkar2018_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Mathurkar S et al., Pharmacokinetics of Salicylic Acid Foll…, Animals : an open access jo… (2018) | [10.3390/ani8070122](https://doi.org/10.3390/ani8070122) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.103). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q304 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Koh_2025_reference](drugs/drug_salicylic_acid/SalicylicAcid_Koh2025_reference.md) | — | parent + metabolite (no model) | 13 | Koh J et al., Population Pharmacokinetic and Pharmaco…, Drug design, development an… (2025) | [10.2147/DDDT.S533428](https://doi.org/10.2147/DDDT.S533428) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (primary re-run, agreement 0.333). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Shintaku_2007_reference](drugs/drug_salicylic_acid/SalicylicAcid_Shintaku2007_reference.md) | — | 1-compartment (no model) | 0 | Shintaku K et al., Kinetic analysis of the transport of sa…, Drug metabolism and disposi… (2007) | [10.1124/dmd.106.013029](https://doi.org/10.1124/dmd.106.013029) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Koh_2025_TXB2](drugs/drug_salicylic_acid/pd_Koh_2025_TXB2.md) | thromboxane B2 ← acetylsalicylic acid · indirect response — drug inhibits the production of thromboxane B2 | model (no simulator) | Koh J et al., Population Pharmacokinetic and Pharmaco…, Drug design, development an… (2025) | [10.2147/DDDT.S533428](https://doi.org/10.2147/DDDT.S533428) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=salicylic_acid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | `SLCO2B1` substrate | DrugBank actor |
| absorption | small intestine | `SLCO2B1` substrate | DrugBank actor |
| distribution | blood | `ALB` other/unknown | DrugBank actor |
| metabolism | kidney | `SLC22A7` substrate | DrugBank actor |
| metabolism | liver | `CYP2C9` substrate, `SLC22A7` substrate | DrugBank actor |
| excretion | kidney | `SLC22A6` inhibitor, `SLC22A8` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: AKR1C1 (inhibitor), CA1 (inhibitor), CA12 (inhibitor), CA2 (inhibitor), CA4 (inhibitor), CA6 (inhibitor), PTGS1 (inhibitor), PTGS2 (inhibitor), SLC16A1 (substrate), SLC22A10 (inhibitor), SLC22A11 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 75 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dubovská_1995.pdf` | Dubovská D et al., Pharmacokinetics of acetylsalicylic aci…, Methods and findings in exp… (1995) | popPK | 9 | not captured | [7623523](https://pubmed.ncbi.nlm.nih.gov/7623523) | The study reports compartmental pharmacokinetic modeling for salicylic acid in humans, but the specific numeric parameter values are not present in the provided abstract text. |
| `Shintaku_2007.pdf` | Shintaku K et al., Kinetic analysis of the transport of sa…, Drug metabolism and disposi… (2007) | popPK | 8 | [10.1124/dmd.106.013029](https://doi.org/10.1124/dmd.106.013029) | [17312018](https://pubmed.ncbi.nlm.nih.gov/17312018) | The study reports quantitative pharmacokinetic parameters (clearances and rate constants) for salicylic acid in a human placental perfusion model. |

<sub>queue written 2026-10-07T13:07:33.870099+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Caldas_2023 | irrelevant | 0 | 0 | The study is an environmental toxicology assessment measuring acute and chronic toxicity (EC50, fecundity) in a cladoceran, not a pharmacokinetic study reporting disposition parameters for salicylic acid. |
| popPK | Cuesta-Gragera_2015 | irrelevant | 0 | 0 | The study focuses on acetylsalicylic acid (ASA), not salicylic acid, and does not report quantitative PK parameters for salicylic acid. |
| popPK | Dubovská_1995 | relevant | 9 | 2 | The study reports compartmental pharmacokinetic modeling for salicylic acid in humans, but the specific numeric parameter values are not present in the provided abstract text. |
| popPK | Han_2023 | irrelevant | 0 | 0 | The study investigates plant physiology and signal transduction in Salvia miltiorrhiza, not the pharmacokinetics of salicylic acid as a drug. |
| popPK | Henschel_1997 | irrelevant | 0 | 0 | The paper is an environmental hazard assessment reporting ecotoxicity (EC50) and degradability, not pharmacokinetic parameters. |
| popPK | Kim_2025 | irrelevant | 0 | 0 | The study investigates the effect of salicylic acid on the vase life of cut lisianthus flowers (botanical/agricultural study), not the pharmacokinetics of salicylic acid in a biological subject. |
| popPK | Kumar_2023 | irrelevant | 0 | 0 | The study is a plant physiology/toxicology experiment using salicylic acid as a plant growth regulator, not a pharmacokinetic study. |
| popPK | Masuoka_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of xanthine oxidase inhibition by anacardic acid, not a pharmacokinetic study of salicylic acid. |
| popPK | Moore_2024 | irrelevant | 2 | 1 | The study reports local dermatopharmacokinetic parameters (skin compartment amounts and transfer rates) for topical salicylic acid, not systemic population PK parameters (CL, V, Q, ka) for the drug as a subject. |
| popPK | Mukherjee_2025 | irrelevant | 0 | 0 | The study focuses on anti-tubercular drugs (kanamycin, fluoroquinolones, ethionamide, PASA, cycloserine) and does not report pharmacokinetic parameters for salicylic acid. |
| popPK | Shen_2016 | irrelevant | 2 | 0 | The study focuses on warfarin pharmacokinetics and interactions, with salicylic acid serving only as a metabolite of the co-administered drug aspirin without specific quantitative PK parameters reported for it. |
| popPK | Tian_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of Panax notoginseng saponins, with salicylic acid/aspirin acting only as a co-administered agent affecting absorption. |
| popPK | Udebuani_2023 | irrelevant | 0 | 0 | The study is an environmental ecotoxicology assessment of salicylic acid in piggery wastewater, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Yu_2023 | irrelevant | 0 | 0 | The study investigates salicylic acid as an elicitor for plant metabolite production, not its pharmacokinetics. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | The paper is a systematic review of methotrexate pharmacokinetics, where salicylic acid is only mentioned as a co-medication covariate, not as the subject drug. |
| popPK | Zhu_2018 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and fungicidal activity of phenazine-salicylic acid conjugates, containing no pharmacokinetic data for salicylic acid. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 13:08 UTC</sub>
