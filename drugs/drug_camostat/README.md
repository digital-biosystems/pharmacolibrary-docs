# camostat

- **generic name:** camostat
- **ATC codes:** `B02AB04`
- **DrugBank:** [DB13729](https://go.drugbank.com/drugs/DB13729)
- **groups:** investigational

## About

**Description.** Camostat mesylate, or FOY-305, is a synthetic serine protease inhibitor.[A193842,A193848] It was first described in the literature in 1981, as part of research on the inhibition of skin tumors in mice.[A198807] Camostat mesylate inhibits cholecystokinin, pro-inflammatory cytokines, and serine proteases, leading to it being investigated for multiple indications including the treatment of COVID-19.[A198771,A198777,A193800]

Camostat mesylate was first approved in Japan in January 2006.[L13197]

**Indication.** Camostat mesylate is indicated in Japan to treat chronic pancreatitis and drug induced lung injury.[A193845] It is also being investigated as a potential treatment for COVID-19.[A193800]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 03:30 | 36:03 | 2/3/0 | 1/4/0 | 0/0/0 | 851,487/37,195 | ollama / qwen3.8:27b-mtp-q8_0 | 11 | 0/11 | 11/0 | 1 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Kim_2023](drugs/drug_camostat/Camostat_Kim2023_gba.md) | Kim G et al., Safety Evaluation and Population Pharma…, Pharmaceutics (2023) | [10.3390/pharmaceutics15092357](https://doi.org/10.3390/pharmaceutics15092357) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Kim_2023](drugs/drug_camostat/Camostat_Kim2023_gbpa.md) | Kim G et al., Safety Evaluation and Population Pharma…, Pharmaceutics (2023) | [10.3390/pharmaceutics15092357](https://doi.org/10.3390/pharmaceutics15092357) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Kitagawa_2021](drugs/drug_camostat/Camostat_Kitagawa2021_reference.md) | Kitagawa J et al., A phase I study of high dose camostat m…, Clinical and translational… (2021) | [10.1111/cts.13052](https://doi.org/10.1111/cts.13052) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kosinsky_2022](drugs/drug_camostat/Camostat_Kosinsky2022_r_s_e.md) | Kosinsky Y et al., Semi-Mechanistic Pharmacokinetic-Pharma…, Microbiology spectrum (2022) | [10.1128/spectrum.02167-21](https://doi.org/10.1128/spectrum.02167-21) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kosinsky_2022](drugs/drug_camostat/Camostat_Kosinsky2022_value.md) | Kosinsky Y et al., Semi-Mechanistic Pharmacokinetic-Pharma…, Microbiology spectrum (2022) | [10.1128/spectrum.02167-21](https://doi.org/10.1128/spectrum.02167-21) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Kitagawa_2021](drugs/drug_camostat/pd_Kitagawa_2021_SARS_CoV_2_infection_inhibition.md) | Kitagawa J et al., A phase I study of high dose camostat m…, Clinical and translational… (2021) | [10.1111/cts.13052](https://doi.org/10.1111/cts.13052) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kosinsky_2022](drugs/drug_camostat/pd_Kosinsky_2022_TMPRSS2_activity.md) | Kosinsky Y et al., Semi-Mechanistic Pharmacokinetic-Pharma…, Microbiology spectrum (2022) | [10.1128/spectrum.02167-21](https://doi.org/10.1128/spectrum.02167-21) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kosinsky_2022](drugs/drug_camostat/pd_Kosinsky_2022_Viral_entry_rate.md) | Kosinsky Y et al., Semi-Mechanistic Pharmacokinetic-Pharma…, Microbiology spectrum (2022) | [10.1128/spectrum.02167-21](https://doi.org/10.1128/spectrum.02167-21) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Kreutzberger_2021](drugs/drug_camostat/pd_Kreutzberger_2021_percentage_of_infected_cells.md) | Kreutzberger AJB et al., Synergistic block of SARS-CoV-2 infecti…, bioRxiv : the preprint serv… (2021) | [10.1101/2021.06.01.446623](https://doi.org/10.1101/2021.06.01.446623) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Mahoney_2021](drugs/drug_camostat/pd_Mahoney_2021_cytopathic_effects.md) | Mahoney M et al., A novel class of TMPRSS2 inhibitors pot…, Proceedings of the National… (2021) | [10.1073/pnas.2108728118](https://doi.org/10.1073/pnas.2108728118) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Mahoney_2021](drugs/drug_camostat/pd_Mahoney_2021_viral_entry.md) | Mahoney M et al., A novel class of TMPRSS2 inhibitors pot…, Proceedings of the National… (2021) | [10.1073/pnas.2108728118](https://doi.org/10.1073/pnas.2108728118) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Raghavan_2022](drugs/drug_camostat/pd_Raghavan_2022_ACE.md) | Raghavan PR, Metadichol®: A Novel Nanolipid Formulat…, BioMed research internation… (2022) | [10.1155/2022/1558860](https://doi.org/10.1155/2022/1558860) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Raghavan_2022](drugs/drug_camostat/pd_Raghavan_2022_ACE2.md) | Raghavan PR, Metadichol®: A Novel Nanolipid Formulat…, BioMed research internation… (2022) | [10.1155/2022/1558860](https://doi.org/10.1155/2022/1558860) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Raghavan_2022](drugs/drug_camostat/pd_Raghavan_2022_SARS_CoV_2.md) | Raghavan PR, Metadichol®: A Novel Nanolipid Formulat…, BioMed research internation… (2022) | [10.1155/2022/1558860](https://doi.org/10.1155/2022/1558860) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Raghavan_2022](drugs/drug_camostat/pd_Raghavan_2022_TMPRSS2.md) | Raghavan PR, Metadichol®: A Novel Nanolipid Formulat…, BioMed research internation… (2022) | [10.1155/2022/1558860](https://doi.org/10.1155/2022/1558860) |

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 5  ·  extracted 2  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Miyazaki_2003.pdf` | Miyazaki M et al., Estimation of bioavailability of salmon…, Drug metabolism and pharmac… (2003) | pd | 5 | [10.2133/dmpk.18.358](https://doi.org/10.2133/dmpk.18.358) | [15618756](https://www.ncbi.nlm.nih.gov/pubmed/15618756) | metadata signals extractable PD data (PK-PD) |

<sub>queue written 2026-09-06T02:59:54.619514+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kreutzberger_2021 | irrelevant | 0 | 0 | The paper is an in-vitro virology study investigating the synergistic inhibition of SARS-CoV-2 infection by camostat and apilimod, reporting EC50 values for antiviral efficacy rather than pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| popPK | Mahoney_2021 | irrelevant | 0 | 0 | The paper focuses on novel TMPRSS2 inhibitors (MM3122, VD2173) and uses camostat only as a comparator/control agent without reporting its specific pharmacokinetic parameters. |
| popPK | Meng_2024 | irrelevant | 0 | 0 | The paper focuses on the antiviral efficacy and mechanism of action of novel aloperine derivatives, with camostat mentioned only as a mechanistic comparator, and contains no pharmacokinetic data. |
| PD | Meng_2024 | not_relevant | 1 | 1 | The paper reports in vitro antiviral EC50 values for a novel compound (3i) and mentions camostat only as a mechanistic comparison, providing no exposure-response or dose-response data for camostat. |
| popPK | Miyazaki_2003 | irrelevant | 1 | 0 | Camostat is a co-administered protease inhibitor used to study salmon calcitonin pharmacokinetics, not the subject drug, and no PK parameters for camostat are reported. |
| popPK | Raghavan_2022 | irrelevant | 0 | 0 | The paper is an in-vitro study on a nanolipid formulation (Metadichol) where camostat is used only as a comparator for enzyme inhibition, with no pharmacokinetic parameters reported. |
| PGx | Rizka_2023 | not_relevant | 0 | 0 | The paper is a computational screening study for new inhibitors and does not report any pharmacogenomic effects on camostat's PK or PD parameters. |
| PGx | Wagoner_2022 | not_relevant | 0 | 0 | The paper reports in vitro pharmacodynamic synergy of drug combinations against SARS-CoV-2 but does not investigate the impact of host gene variants or genotypes on the PK or PD of camostat. |
| PGx | Weiss_2021 | not_relevant | 0 | 0 | The paper investigates the potential of camostat to act as a perpetrator in drug-drug interactions (inhibition/induction of transporters/enzymes) and does not report any pharmacogenomic effects (gene variants) on its PK or PD parameters. |
| popPK | Yamamoto_2020 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on SARS-CoV-2 inhibition where camostat is only a comparator agent, and no pharmacokinetic parameters are reported. |
| popPK | Yuan_2020 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral screening study where camostat is mentioned only as a comparator that was not detected in the primary screen, and no pharmacokinetic parameters for camostat are reported. |
| PD | Yuan_2020 | not_relevant | 0 | 0 | The paper does not mention camostat; it screens other FDA-approved drugs (bexarotene, cetilistat, diiodohydroxyquinoline, abiraterone) for anti-SARS-CoV-2 activity. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_camostat`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
