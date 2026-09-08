# hydromorphone

- **generic name:** hydromorphone
- **ATC codes:** `N02AA03`, `N02AA53`, `N02AG04`
- **DrugBank:** [DB00327](https://go.drugbank.com/drugs/DB00327)
- **groups:** approved, illicit, investigational

## About

**Description.** Hydromorphone is a pure opioid,[A176468] a semi-synthetic hydrogenated ketone derivative of [morphine] that has been available clinically since 1920. Structurally, hydromorphone derived from [morphine] in the modification of the hydroxyl group in the carbon 6 to a carbonyl and the absence of a double bond between the carbon 7 and 8. Due to these modifications, it presents a very high potency and comparable side effect profile to the parent compound.[A176471] Even though hydromorphone does not present a 6-hydroxyl group, it is categorized under the family of phenanthrenes and it is considered a chemical under the schedule II (medical purposes with high addiction potential).[A176495]

The first reported approved product containing hydromorphone in the form of hydromorphone hydrochloride was developed by Fresenius Kabi USA and FDA approved in 1984.[L5795]

**Indication.** Hydromorphone is indicated for the management of moderate to severe acute pain and severe chronic pain. Due to its addictive potential and overdose risk, hydromorphone is only prescribed when other first-line treatments have failed.[A176468]

The WHO has proposed a three-step ladder for the management of pain in which it is suggested to start with a non-opioid medication followed by addition of weak opioids to the non-opioid treatment for moderate pain and finishing in the use of strong opioids such as hydromorphone along with the existing regimen for cases of severe pain.[A176471]

Off-label, hydromorphone can be administered for the suppression of refractory cough.[A176468]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-27 20:32 | 3:31 | 1/1/0 | 0/3/0 | 0/0/0 | 119,811/2,708 | ollama / qwen3.8:27b-mtp-q8_0 | 12 | 3/0 | 5/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Meissner_2025](drugs/drug_hydromorphone/Hydromorphone_Meissner2025_reference.md) | Meissner K et al., Morphine and hydromorphone pharmacokine…, British journal of anaesthe… (2025) | [10.1016/j.bja.2024.08.042](https://doi.org/10.1016/j.bja.2024.08.042) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Wimbish_2024](drugs/drug_hydromorphone/Hydromorphone_Wimbish2024_reference.md) | Wimbish C et al., Pharmacokinetics of a continuous intrav…, Frontiers in veterinary sci… (2024) | [10.3389/fvets.2024.1362730](https://doi.org/10.3389/fvets.2024.1362730) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Nordmeier_2022](drugs/drug_hydromorphone/pd_Nordmeier_2022_Emax.md) | Nordmeier F et al., Are the N-demethylated metabolites of U…, Drug testing and analysis (2022) | [10.1002/dta.3182](https://doi.org/10.1002/dta.3182) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Vandeputte_2020](drugs/drug_hydromorphone/pd_Vandeputte_2020_G_protein_mini_Gi_recruitment.md) | Vandeputte MM et al., In vitro functional characterization of…, Archives of toxicology (2020) | [10.1007/s00204-020-02855-7](https://doi.org/10.1007/s00204-020-02855-7) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Vandeputte_2020](drugs/drug_hydromorphone/pd_Vandeputte_2020_arrestin2_arr2_recruitment.md) | Vandeputte MM et al., In vitro functional characterization of…, Archives of toxicology (2020) | [10.1007/s00204-020-02855-7](https://doi.org/10.1007/s00204-020-02855-7) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Walsh_2024](drugs/drug_hydromorphone/pd_Walsh_2024_COWS.md) | Walsh SL et al., Pharmacokinetic-pharmacodynamic analysi…, Neuropsychopharmacology : o… (2024) | [10.1038/s41386-023-01793-z](https://doi.org/10.1038/s41386-023-01793-z) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Walsh_2024](drugs/drug_hydromorphone/pd_Walsh_2024_VAS.md) | Walsh SL et al., Pharmacokinetic-pharmacodynamic analysi…, Neuropsychopharmacology : o… (2024) | [10.1038/s41386-023-01793-z](https://doi.org/10.1038/s41386-023-01793-z) |

## Coverage

- **PubMed hits:** 43 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Nordmeier_2022 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic assay assessing mu-opioid receptor activation, not a pharmacokinetic study, and hydromorphone is used only as a reference standard. |
| popPK | Vandeputte_2020 | irrelevant | 0 | 0 | The study is an in vitro pharmacological characterization of opioid receptor agonism (EC50/Emax) where hydromorphone serves only as a reference compound, not a subject of pharmacokinetic analysis. |
| popPK | Walsh_2024 | irrelevant | 0 | 0 | The paper is about buprenorphine PK/PD with hydromorphone as a challenge drug, and no hydromorphone PK parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_hydromorphone`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
