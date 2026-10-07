<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09C&quot;,&quot;href&quot;:&quot;atc/C09C.md&quot;},{&quot;label&quot;:&quot;candesartan&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Candesartan_Kassem2021_estimates&quot;,&quot;label&quot;:&quot;Kassem_2021_estimates&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_candesartan/Candesartan_Kassem2021_estimates.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Candesartan_Kassem2021_final_model&quot;,&quot;label&quot;:&quot;Kassem_2021_final_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_candesartan/Candesartan_Kassem2021_final_model.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# candesartan

- **generic name:** candesartan
- **ATC codes:** `C09CA06`, `C09DA06`, `C09DB07`, `C10BX19`
- **DrugBank:** [DB13919](https://go.drugbank.com/drugs/DB13919) · **PubChem:** [CID 2541](https://pubchem.ncbi.nlm.nih.gov/compound/2541)
- **molar mass:** 440.454 g/mol (C24H20N6O3) — DrugBank
- **groups:** investigational

## About

Candesartan is an angiotensin II receptor antagonist used mainly to treat high blood pressure and congestive heart failure. DrugBank currently lists it as investigational, so its availability as an approved medicine is unclear from the available facts.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415970](https://www.wikidata.org/wiki/Q415970) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| candesartan | parent | 440.454 | C24H20N6O3 | DrugBank | [2541](https://pubchem.ncbi.nlm.nih.gov/compound/2541) | Kassem_2021, Meineke_1997, Pfister_1999 |
| candesartan cilexetil | metabolite | 610.671 | C33H34N6O6 | PubChem | [2540](https://pubchem.ncbi.nlm.nih.gov/compound/2540) | Meineke_1997 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:34 | 12:21 | 2/2/1 | 0/0/0 | 0/0/0 | 159,245/40,910 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 6/0 | 5/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | [Kassem_2021_estimates](drugs/drug_candesartan/Candesartan_Kassem2021_estimates.md) | ▶ model + simulator | 1-compartment, oral | 4 (+4 cov.) | Kassem I et al., Population Pharmacokinetics of Candesar…, Clinical and translational… (2021) | [10.1111/cts.12842](https://doi.org/10.1111/cts.12842) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | [Kassem_2021_final_model](drugs/drug_candesartan/Candesartan_Kassem2021_final_model.md) | ▶ model + simulator | 1-compartment, oral | 4 (+2 cov.) | Kassem I et al., Population Pharmacokinetics of Candesar…, Clinical and translational… (2021) | [10.1111/cts.12842](https://doi.org/10.1111/cts.12842) |
| <span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: not captured</sub> | [Kassem_2021_reference](drugs/drug_candesartan/Candesartan_Kassem2021_reference.md) | — | — (no model) | 0 | Kassem I et al., Population Pharmacokinetics of Candesar…, Clinical and translational… (2021) | [10.1111/cts.12842](https://doi.org/10.1111/cts.12842) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.071). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Meineke_1997_reference](drugs/drug_candesartan/Candesartan_Meineke1997_reference.md) | — | 1-compartment (no model) | 5 | Meineke I et al., Pharmacokinetics and pharmacodynamics o…, European journal of clinica… (1997) | [10.1007/s002280050366](https://doi.org/10.1007/s002280050366) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Pfister_1999_reference](drugs/drug_candesartan/Candesartan_Pfister1999_reference.md) | — | 1-compartment (no model) | 1 | Pfister M et al., Pharmacokinetics and haemodynamics of c…, British journal of clinical… (1999) | [10.1046/j.1365-2125.1999.00939.x](https://doi.org/10.1046/j.1365-2125.1999.00939.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=candesartan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2C8` inhibitor, `CYP2C9` inhibitor/substrate, `SLCO1B1` inhibitor, `UGT1A3` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: AGTR1 (target), PTGS1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 33 matched, 20 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 5  ·  extracted 2  ·  needs_review 0  ·  rejected 2  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Meineke_1997.pdf` | Meineke I et al., Pharmacokinetics and pharmacodynamics o…, European journal of clinica… (1997) | popPK | 10 | [10.1007/s002280050366](https://doi.org/10.1007/s002280050366) | [9476035](https://pubmed.ncbi.nlm.nih.gov/9476035) | The paper reports a population pharmacokinetic model for candesartan in humans with explicit numeric values for clearance, volumes, intercompartmental clearance, and half-life. |
| `Gleiter_2002.pdf` | Gleiter CH et al., Clinical pharmacokinetics of candesartan, Clinical pharmacokinetics (2002) | popPK | 9 | [10.2165/00003088-200241010-00002](https://doi.org/10.2165/00003088-200241010-00002) | [11825094](https://pubmed.ncbi.nlm.nih.gov/11825094) | The text provides specific quantitative PK parameters for candesartan in humans, including volume of distribution (0.13 L/kg), oral clearance (0.25 L/h/kg), and elimination half-lives (7.1-15.7 hours) across different renal function groups. |

<sub>queue written 2026-10-07T07:24:03.991648+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Azizi_1999 | irrelevant | 2 | 0 | The study reports pharmacodynamic endpoints (blood pressure, renin) and qualitative PK-PD interactions, but does not provide quantitative disposition parameters (CL, V, t1/2) for candesartan. |
| popPK | Brosnihan_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of Ang-(1-7) vasodilation where candesartan is used only as a receptor antagonist tool compound, with no pharmacokinetic parameters reported. |
| popPK | Brown_2001 | irrelevant | 0 | 0 | The study focuses on cardiovascular remodelling and hemodynamics in rats, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for candesartan. |
| popPK | Elmfeldt_1997 | irrelevant | 0 | 0 | The paper reports dose-response pharmacodynamic data (blood pressure reduction) rather than pharmacokinetic parameters (CL, V, t1/2). |
| popPK | Elmfeldt_2002 | irrelevant | 0 | 0 | The study is a pharmacodynamic meta-analysis of dose-response relationships for blood pressure reduction, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Gradman_2002 | irrelevant | 0 | 0 | The paper is a pharmacological review discussing receptor binding kinetics and clinical efficacy, not a pharmacokinetic study reporting disposition parameters like clearance or volume of distribution. |
| popPK | Hajjar_2022 | irrelevant | 0 | 0 | The study is a clinical trial assessing safety and biomarker effects of candesartan in Alzheimer's disease, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Kitamura_2007 | irrelevant | 0 | 0 | The study investigates the effect of ARB therapy on blood glucose and HbA1c levels, not the pharmacokinetic parameters (CL, V, etc.) of candesartan. |
| popPK | Lortie_2013 | irrelevant | 2 | 0 | The study is a PET imaging study assessing receptor binding density using a radioligand, not a pharmacokinetic study reporting standard disposition parameters (CL, V, ka) for candesartan. |
| popPK | Malerczyk_1998 | irrelevant | 4 | 2 | The study reports only a terminal half-life (~6 h) and peak time, lacking the full set of quantitative disposition parameters (CL, V, ka) or a compartmental model required for population PK extraction. |
| popPK | Nap_2003 | irrelevant | 0 | 0 | The study reports pharmacodynamic potency (pIC50, pA2) in an in vitro rabbit aorta model, not pharmacokinetic disposition parameters. |
| popPK | Nishida_2010 | irrelevant | 0 | 0 | The study investigates the effect of candesartan on lipid metabolism (HDL-C, TG, etc.) and does not report any pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Ren_2022 | irrelevant | 1 | 0 | The paper is a review/tutorial on pharmacodynamic modeling of slow reversible binding and does not report quantitative pharmacokinetic disposition parameters (CL, V, etc.) for candesartan. |
| popPK | Sundström_2023 | irrelevant | 0 | 0 | The study is a clinical trial measuring blood pressure response (pharmacodynamics) and does not report pharmacokinetic parameters for candesartan. |
| popPK | Zannad_2007 | irrelevant | 0 | 0 | The paper is a review of blood pressure efficacy (pharmacodynamics) and does not report pharmacokinetic parameters for candesartan. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:24 UTC</sub>
