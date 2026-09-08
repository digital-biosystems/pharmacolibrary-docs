# pregabalin

- **generic name:** pregabalin
- **ATC codes:** `N02BF02`, `N03AX16`
- **DrugBank:** [DB00230](https://go.drugbank.com/drugs/DB00230)
- **groups:** approved, investigational

## About

**Description.** Pregabalin is structurally similar to gamma-aminobutyric acid (GABA) - an inhibitory neurotransmitter.[A173995] It may be used to manage neuropathic pain, postherpetic neuralgia, and fibromyalgia among other conditions.[A187190] Although as per the FDA Label the mechanism of action has not been definitively characterized, there is evidence that pregabalin exerts its effects by binding to the α2δ subunit of voltage-dependent calcium channels.[A187190,L7066] Pregabalin is marketed by Pfizer under the trade name Lyrica and Lyrica Cr (extended release).[L1006,L7066] It may have dependence liability if misused but the risk appears to be highest in patients with current or past substance use disorders.[A31161]

**Indication.** Pregabalin is indicated for the management of neuropathic pain associated with diabetic peripheral neuropathy, postherpetic neuralgia, fibromyalgia, neuropathic pain associated with spinal cord injury, and as adjunctive therapy for the treatment of partial-onset seizures in patients 1 month of age and older.[L7066]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-29 15:14 | 26:46 | 3/6/0 | 2/0/0 | 1/0/0 | 355,420/32,788 | ollama / qwen3.8:27b-mtp-q8_0 | 20 | 2/13 | 20/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Bae_2016](drugs/drug_pregabalin/Pregabalin_Bae2016_reference.md) | Bae EK et al., Factors influencing topiramate clearanc…, Seizure (2016) | [10.1016/j.seizure.2016.02.002](https://doi.org/10.1016/j.seizure.2016.02.002) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Bender_2009](drugs/drug_pregabalin/Pregabalin_Bender2009_reference.md) | Bender G et al., Population pharmacokinetic model of the…, Pharmaceutical research (2009) | [10.1007/s11095-009-9942-y](https://doi.org/10.1007/s11095-009-9942-y) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Chan_2021](drugs/drug_pregabalin/Pregabalin_Chan2021_estimate_rse.md) | Chan PLS et al., Pregabalin Population Pharmacokinetic a…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2132](https://doi.org/10.1002/cpt.2132) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Chan_2021](drugs/drug_pregabalin/Pregabalin_Chan2021_model.md) | Chan PLS et al., Pregabalin Population Pharmacokinetic a…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2132](https://doi.org/10.1002/cpt.2132) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Feng_2001](drugs/drug_pregabalin/Pregabalin_Feng2001_reference.md) | Feng MR et al., Brain microdialysis and PK/PD correlati…, European journal of drug me… (2001) | [10.1007/BF03190385](https://doi.org/10.1007/BF03190385) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Hong_2016](drugs/drug_pregabalin/Pregabalin_Hong2016_description_unit.md) | Hong T et al., Comparison of oral absorption models fo…, Drug design, development an… (2016) | [10.2147/DDDT.S123318](https://doi.org/10.2147/DDDT.S123318) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Hong_2016](drugs/drug_pregabalin/Pregabalin_Hong2016_estimate.md) | Hong T et al., Comparison of oral absorption models fo…, Drug design, development an… (2016) | [10.2147/DDDT.S123318](https://doi.org/10.2147/DDDT.S123318) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Park_2023](drugs/drug_pregabalin/Pregabalin_Park2023_reference.md) | Park M et al., Pharmacokinetic properties of a new sus…, Translational and clinical… (2023) | [10.12793/tcp.2023.31.e20](https://doi.org/10.12793/tcp.2023.31.e20) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [van_2018](drugs/drug_pregabalin/Pregabalin_van2018_reference.md) | van Esdonk MJ et al., Population Pharmacokinetic/Pharmacodyna…, CPT: pharmacometrics & syst… (2018) | [10.1002/psp4.12318](https://doi.org/10.1002/psp4.12318) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Chan_2021](drugs/drug_pregabalin/pd_Chan_2021_log_transformed_28_day_seizure_rate.md) | Chan PLS et al., Pregabalin Population Pharmacokinetic a…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2132](https://doi.org/10.1002/cpt.2132) |
| <span class="pk-badge pk-badge--green">extracted</span> | [van_2018](drugs/drug_pregabalin/pd_van_2018_CP_PTT.md) | van Esdonk MJ et al., Population Pharmacokinetic/Pharmacodyna…, CPT: pharmacometrics & syst… (2018) | [10.1002/psp4.12318](https://doi.org/10.1002/psp4.12318) |
| <span class="pk-badge pk-badge--green">extracted</span> | [van_2018](drugs/drug_pregabalin/pd_van_2018_ES_PTT.md) | van Esdonk MJ et al., Population Pharmacokinetic/Pharmacodyna…, CPT: pharmacometrics & syst… (2018) | [10.1002/psp4.12318](https://doi.org/10.1002/psp4.12318) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | **NAT2** | `Q22` · CL | metabolism | [Calleja_2025](drugs/drug_pregabalin/pgx_Calleja_2025_NAT2_Q22.md) | Calleja S et al., Impact of Genetic Variants on Pregabali…, Pharmaceuticals (Basel, Swi… (2025) | [10.3390/ph18020151](https://doi.org/10.3390/ph18020151) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 84 matched, 52 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 9  ·  extracted 3  ·  needs_review 0  ·  rejected 6  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bockbrader_2011.pdf` | Bockbrader HN et al., Population pharmacokinetics of pregabal…, Epilepsia (2011) | popPK | 10 | [10.1111/j.1528-1167.2010.02933.x](https://doi.org/10.1111/j.1528-1167.2010.02933.x) | [21269291](https://pubmed.ncbi.nlm.nih.gov/21269291) | The paper is a population PK study for pregabalin, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, which only contains the abstract summary. |
| `Chew_2019.pdf` | Chew M et al., Population Pharmacokinetics of Pregabal…, Journal of clinical pharmac… (2019) | popPK | 10 | [10.1002/jcph.1450](https://doi.org/10.1002/jcph.1450) | [31183879](https://pubmed.ncbi.nlm.nih.gov/31183879) | The paper is a population PK study for pregabalin, but the specific numeric parameter values are not present in the provided evidence text. |
| `Al-Ghazawi_2014.pdf` | Al-Ghazawi A et al., Bioequivalence of two pregabalin 300 mg…, Drug research (2014) | popPK | 8 | [10.1055/s-0033-1361127](https://doi.org/10.1055/s-0033-1361127) | [24307269](https://pubmed.ncbi.nlm.nih.gov/24307269) | The study reports pharmacokinetic parameters for pregabalin, but the specific numeric values are not present in the provided evidence text. |
| `Feng_2001.pdf` | Feng MR et al., Brain microdialysis and PK/PD correlati…, European journal of drug me… (2001) | popPK | 8 | [10.1007/BF03190385](https://doi.org/10.1007/BF03190385) | [11554426](https://pubmed.ncbi.nlm.nih.gov/11554426) | The study reports quantitative PK/PD parameters (CLin, CLout, ECe50, Keo) for pregabalin in rats, but standard systemic disposition parameters like total clearance (CL) or volume of distribution (V) are not explicitly listed in the provided text. |

<sub>queue written 2026-08-29T14:53:02.944504+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmad_2021 | irrelevant | 0 | 0 | The study is a mechanistic pharmacological investigation of antineuropathic pain mechanisms (IL-10/β-endorphin expression) and does not report pharmacokinetic disposition parameters for pregabalin. |
| popPK | Al-Ghazawi_2014 | relevant | 8 | 0 | The study reports pharmacokinetic parameters for pregabalin, but the specific numeric values are not present in the provided evidence text. |
| PGx | Alcantara-Montero_2017 | not_relevant | 0 | 0 | The paper discusses desvenlafaxine pharmacology and mentions pregabalin only as a first-line treatment for neuropathic pain, without reporting any pharmacogenomic effects on pregabalin's PK or PD parameters. |
| popPK | Arnold_2017 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety analysis (dose-response for pain and adverse events) and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Aylón_2026 | not_relevant | 0 | 0 | The paper is a review that explicitly states there is insufficient information to determine if pregabalin is a P-gp substrate, and it does not report specific pharmacogenomic effects on PK/PD parameters for pregabalin. |
| popPK | Bae_2016 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for topiramate, not pregabalin. |
| PD | Bender_2009 | not_relevant | 2 | 0 | The paper focuses on population PK modeling and simulation for study design; it does not report observed PD data or fitted numeric PD parameters (e.g., Emax, EC50) for pregabalin, only simulating the precision of future PD estimates. |
| popPK | Bockbrader_2011 | relevant | 10 | 0 | The paper is a population PK study for pregabalin, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, which only contains the abstract summary. |
| PGx | Chan_2014 | not_relevant | 0 | 0 | The study investigates P-glycoprotein substrate status in vitro and does not report pharmacogenomic effects on PK or PD parameters. |
| PGx | Cheung_2026 | not_relevant | 0 | 0 | The paper is a case report on OCD treatment using a glutamatergic regimen and does not report pharmacogenomic effects on the PK or PD of pregabalin. |
| popPK | Chew_2019 | relevant | 10 | 0 | The paper is a population PK study for pregabalin, but the specific numeric parameter values are not present in the provided evidence text. |
| PGx | Desmarais_2010 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving tamoxifen and mentions pregabalin only as a safe alternative for hot flashes, without reporting any pharmacogenomic effects on pregabalin's PK or PD parameters. |
| PGx | Galgani_2018 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions between DOACs and AEDs, not pharmacogenomic effects of gene variants on PK/PD. |
| popPK | Gewandter_2022 | irrelevant | 0 | 0 | The paper is a clinical efficacy study analyzing pain scores and treatment response, containing no pharmacokinetic parameters or disposition data for pregabalin. |
| popPK | Jung_2022 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel tianeptine derivatives where pregabalin is only used as a structural pharmacophore for hybridization, with no pharmacokinetic parameters reported. |
| PD | Jung_2022 | not_relevant | 0 | 0 | The paper reports pharmacological data for novel tianeptine derivatives, not pregabalin; pregabalin is only mentioned as a pharmacophore source for hybridization. |
| PGx | Kakuda_2011 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving etravirine and mentions pregabalin only as a non-interacting antiepileptic, without reporting any pharmacogenomic effects on pregabalin's PK or PD. |
| popPK | Kumar_2020 | irrelevant | 0 | 0 | The study is a pharmacodynamic screening of drug resistance in an animal model where pregabalin is used only as a test drug, with no quantitative pharmacokinetic parameters reported. |
| PD | Kumar_2020 | not_relevant | 1 | 0 | The paper reports a qualitative lack of efficacy (resistance) for pregabalin at a single dose in a mouse model, but provides no concentration-effect data, dose-response curve, or numeric PD parameters. |
| popPK | Manville_2018 | irrelevant | 0 | 0 | The paper is a mechanistic electrophysiology study on potassium channels and does not report any pharmacokinetic parameters for pregabalin. |
| popPK | Miller_2003 | irrelevant | 0 | 0 | The paper is an exposure-response (pharmacodynamic) analysis of seizure frequency, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Muhn_2022 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics for tramadol and amitriptyline, but only mentions optimizing pregabalin dosing without reporting any gene-variant effects on its PK or PD parameters. |
| PGx | Rodríguez-Arias_2015 | not_relevant | 0 | 0 | The paper is a review of therapies for opiate addiction and does not discuss pregabalin or pharmacogenomic effects on its PK/PD parameters. |
| PGx | Sloan_2022 | not_relevant | 0 | 0 | The paper is a general review of treatment strategies for painful diabetic neuropathy and does not report specific pharmacogenomic effects on pregabalin PK or PD parameters. |
| popPK | Zárate_2025 | relevant | 4 | 8 | The study reports non-compartmental PK parameters (Cmax, AUC, t1/2) for pregabalin, but lacks compartmental model parameters (CL, V, Q, ka) required for population-PK extraction. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_pregabalin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
