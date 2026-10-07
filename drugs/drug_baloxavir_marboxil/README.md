<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;baloxavir marboxil&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;BaloxavirMarboxil_Kim2022_reference&quot;,&quot;label&quot;:&quot;Kim_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Kim2022_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;BaloxavirMarboxil_Retout2026_reference&quot;,&quot;label&quot;:&quot;Retout_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Retout2026_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# baloxavir marboxil

- **generic name:** baloxavir marboxil
- **ATC codes:** `J05AX25`
- **DrugBank:** [DB13997](https://go.drugbank.com/drugs/DB13997) · **PubChem:** not captured
- **molar mass:** 571.55 g/mol (C27H23F2N3O7S) — DrugBank
- **groups:** approved, investigational

## About

Baloxavir marboxil is an antiviral medicine used to treat influenza. It is authorised in the European Union and is an approved, marketed drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q48333728](https://www.wikidata.org/wiki/Q48333728) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| baloxavir marboxil | parent | 571.55 | C27H23F2N3O7S | DrugBank | — | Kim_2022, Koshimichi_2020, Retout_2026 |
| baloxavir acid | metabolite | 483.489 | C24H19F2N3O4S | PubChem | [134817204](https://pubchem.ncbi.nlm.nih.gov/compound/134817204) | Kim_2022, Koshimichi_2020, Retout_2026 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:41 | 8:57 | 2/1/0 | 1/1/0 | 0/0/0 | 405,946/34,751 | ollama / glm-5.3-flash | 8 | 3/5 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Kim_2022_reference](drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Kim2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 10 (+2 cov.) | Kim Y et al., Pharmacokinetics and safety of a novel…, Clinical and translational… (2022) | [10.1111/cts.13160](https://doi.org/10.1111/cts.13160) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Retout_2026_reference](drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Retout2026_reference.md) | ▶ model + simulator | 1-compartment, oral | 6 (+5 cov.) | Retout S et al., Population Pharmacokinetic and Exposure…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70204](https://doi.org/10.1002/cpt.70204) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Koshimichi_2020_reference](drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Koshimichi2020_reference.md) | — | 1-compartment (no model) | 8 (+5 cov.) | Koshimichi H et al., Population Pharmacokinetics and Exposur…, Antimicrobial agents and ch… (2020) | [10.1128/AAC.00119-20](https://doi.org/10.1128/AAC.00119-20) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Koshimichi_2019_2_reduction_in_the_influenza_virus_titer](drugs/drug_baloxavir_marboxil/pd_Koshimichi_2019_2_reduction_in_the_influenza_virus_titer.md) | reduction in the influenza virus titer ← baloxavir acid · inhibition effect | — | Koshimichi H et al., Population Pharmacokinetic and Exposure…, Journal of pharmaceutical s… (2019) | [10.1016/j.xphs.2018.12.005](https://doi.org/10.1016/j.xphs.2018.12.005) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Koshimichi_2019_2_time_to_alleviation_of_symptoms](drugs/drug_baloxavir_marboxil/pd_Koshimichi_2019_2_time_to_alleviation_of_symptoms.md) | time to alleviation of symptoms ← baloxavir acid · model not identified | — | Koshimichi H et al., Population Pharmacokinetic and Exposure…, Journal of pharmaceutical s… (2019) | [10.1016/j.xphs.2018.12.005](https://doi.org/10.1016/j.xphs.2018.12.005) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Watanabe_2019_TTAS](drugs/drug_baloxavir_marboxil/pd_Watanabe_2019_TTAS.md) | time to alleviation of symptoms ← baloxavir marboxil · direct linear effect | — | Watanabe A et al., Baloxavir marboxil in Japanese patients…, Antiviral research (2019) | [10.1016/j.antiviral.2019.01.012](https://doi.org/10.1016/j.antiviral.2019.01.012) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Watanabe_2019_change_in_virus_titer](drugs/drug_baloxavir_marboxil/pd_Watanabe_2019_change_in_virus_titer.md) | change in virus titer ← baloxavir marboxil · direct Emax (saturable) effect | — | Watanabe A et al., Baloxavir marboxil in Japanese patients…, Antiviral research (2019) | [10.1016/j.antiviral.2019.01.012](https://doi.org/10.1016/j.antiviral.2019.01.012) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=baloxavir_marboxil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2B6` inhibitor, `CYP2C8` inhibitor, `CYP3A4` inhibitor/substrate, `UGT1A3` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 19 matched, 16 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 2  ·  needs_review 0  ·  rejected 1  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Koshimichi_2019.pdf` | Koshimichi H et al., Population Pharmacokinetics of Baloxavi…, Journal of pharmaceutical s… (2019) | popPK | 10 | [10.1016/j.xphs.2019.04.010](https://doi.org/10.1016/j.xphs.2019.04.010) | [30998942](https://pubmed.ncbi.nlm.nih.gov/30998942) | Population PK model of baloxavir acid (2-compartment, first-order absorption) in Japanese pediatric patients, but numeric parameter values are not shown in the abstract. |
| `Koshimichi_2019_2.pdf` | Koshimichi H et al., Population Pharmacokinetic and Exposure…, Journal of pharmaceutical s… (2019) | popPK | 10 | [10.1016/j.xphs.2018.12.005](https://doi.org/10.1016/j.xphs.2018.12.005) | [30557562](https://pubmed.ncbi.nlm.nih.gov/30557562) | Population PK model of baloxavir acid (2-compartment, CL/V with covariates) is clearly the subject drug, but no numeric parameter values appear in the evidence—likely in tables/supplement not provided. |
| `Retout_2022.pdf` | Retout S et al., A Pharmacokinetics-Time to Alleviation…, Clinical pharmacology and t… (2022) | popPK | 8 | [10.1002/cpt.2648](https://doi.org/10.1002/cpt.2648) | [35585696](https://pubmed.ncbi.nlm.nih.gov/35585696) | Population PK model of baloxavir acid in influenza patients, but the actual PK parameter values (CL, V, etc.) are not shown in the evidence, only AUC exposure ranges. |

<sub>queue written 2026-10-07T15:33:01.039074+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Checkmahomed_2020 | irrelevant | 0 | 0 | In vitro antiviral combination study reporting EC50/CI values, not PK disposition parameters (CL, V, half-life, or PK model) for baloxavir. |
| popPK | He_2025 | irrelevant | 0 | 0 | This is a medicinal chemistry/SAR paper on a new spirocyclic inhibitor; baloxavir is only a reference scaffold and no PK parameters for it are reported. |
| popPK | Koshimichi_2019 | relevant | 10 | 3 | Population PK model of baloxavir acid (2-compartment, first-order absorption) in Japanese pediatric patients, but numeric parameter values are not shown in the abstract. |
| popPK | Koshimichi_2019_2 | relevant | 10 | 3 | Population PK model of baloxavir acid (2-compartment, CL/V with covariates) is clearly the subject drug, but no numeric parameter values appear in the evidence—likely in tables/supplement not provided. |
| popPK | Koszalka_2019 | irrelevant | 0 | 0 | The evidence contains only GROBID boilerplate with no paper content, so no PK parameters for baloxavir marboxil are present. |
| popPK | Lou_2021 | irrelevant | 1 | 2 | A COVID-19 efficacy trial measuring only sparse plasma concentrations of baloxavir acid; no PK model or disposition parameters (CL, V, t½ with volume) are reported, and detailed values live in supplementary tables not provided. |
| popPK | Luo_2023 | irrelevant | 0 | 0 | This is an antiviral efficacy/resistance study of ZX-7101 with BXM only as comparator; no PK parameters (CL, V, half-life, PK model) for baloxavir are reported. |
| popPK | Omoto_2018 | irrelevant | 0 | 0 | This is a virology/resistance study of baloxavir (EC50 susceptibility, crystal structures) with no PK disposition parameters (CL, V, half-life, or PK model) reported. |
| popPK | Retout_2022 | relevant | 8 | 3 | Population PK model of baloxavir acid in influenza patients, but the actual PK parameter values (CL, V, etc.) are not shown in the evidence, only AUC exposure ranges. |
| popPK | Takashita_2025 | irrelevant | 0 | 0 | This is a virology susceptibility study with no pharmacokinetic parameters for baloxavir marboxil. |
| popPK | Watanabe_2019 | irrelevant | 3 | 1 | This is a PK/PD efficacy study reporting only exposure (C24) relationships, not quantitative disposition parameters (CL, V, ka, half-life) for baloxavir; no numeric PK parameter values appear in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 15:33 UTC</sub>
