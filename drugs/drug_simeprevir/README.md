<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;simeprevir&quot;}]"></div>

# simeprevir

- **generic name:** simeprevir
- **ATC codes:** `J05AE14`, `J05AP05`
- **DrugBank:** [DB06290](https://go.drugbank.com/drugs/DB06290) · **PubChem:** [CID 24873435](https://pubchem.ncbi.nlm.nih.gov/compound/24873435)
- **molar mass:** 749.939 g/mol (C38H47N5O7S2) — DrugBank
- **groups:** approved, withdrawn

## About

Simeprevir is an antiviral protease inhibitor that was used to treat chronic hepatitis C infection. It is no longer available in the European Union, where its marketing authorisation has been withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7517689](https://www.wikidata.org/wiki/Q7517689) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| simeprevir | parent | 749.939 | C38H47N5O7S2 | DrugBank | [24873435](https://pubchem.ncbi.nlm.nih.gov/compound/24873435) | Valade_2018 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:25 | 2:20 | 0/1/0 | 5/0/0 | 0/0/0 | 163,561/8,560 | ollama / glm-5.3-flash | 5 | 1/4 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Valade_2018_reference](drugs/drug_simeprevir/Simeprevir_Valade2018_reference.md) | — | 1-compartment (no model) | 2 | Valade E et al., Characterizing the Pharmacokinetic Inte…, The AAPS journal (2018) | [10.1208/s12248-018-0271-0](https://doi.org/10.1208/s12248-018-0271-0) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Chen_2025_EC50](drugs/drug_simeprevir/pd_Chen_2025_EC50.md) | SFTSV antiviral activity (EC50 of simeprevir) ← simeprevir · inhibition effect | — | Chen Q et al., Drug Repurposing: In Vitro Evaluation o…, Journal of medical virology (2025) | [10.1002/jmv.70655](https://doi.org/10.1002/jmv.70655) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gammeltoft_2021_percent_residual_infectivity_SARS_CoV_2_spike_protein_positive_cells](drugs/drug_simeprevir/pd_Gammeltoft_2021_percent_residual_infectivity_SARS_CoV_2_spik.md) | percent residual infectivity (SARS-CoV-2 spike protein-positive cells) ← simeprevir · direct sigmoid Emax (Hill) effect | — | Gammeltoft KA et al., Hepatitis C Virus Protease Inhibitors S…, Antimicrobial agents and ch… (2021) | [10.1128/AAC.02680-20](https://doi.org/10.1128/AAC.02680-20) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gammeltoft_2021_percent_residual_infectivity_SARS_CoV_2_spike_protein_positive_cells_2](drugs/drug_simeprevir/pd_Gammeltoft_2021_percent_residual_infectivity_SARS_CoV_2_spik.md) | percent residual infectivity (SARS-CoV-2 spike protein-positive cells) ← simeprevir · direct sigmoid Emax (Hill) effect | — | Gammeltoft KA et al., Hepatitis C Virus Protease Inhibitors S…, Antimicrobial agents and ch… (2021) | [10.1128/AAC.02680-20](https://doi.org/10.1128/AAC.02680-20) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gammeltoft_2021_percent_residual_infectivity_SARS_CoV_2_spike_protein_positive_cells_3](drugs/drug_simeprevir/pd_Gammeltoft_2021_percent_residual_infectivity_SARS_CoV_2_spik.md) | percent residual infectivity (SARS-CoV-2 spike protein-positive cells) ← simeprevir · direct sigmoid Emax (Hill) effect | — | Gammeltoft KA et al., Hepatitis C Virus Protease Inhibitors S…, Antimicrobial agents and ch… (2021) | [10.1128/AAC.02680-20](https://doi.org/10.1128/AAC.02680-20) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Ma_2022_BRET_ratio](drugs/drug_simeprevir/pd_Ma_2022_BRET_ratio.md) | SARS-CoV-2 3CLpro activity (BRET ratio) ← simeprevir · direct sigmoid Emax (Hill) effect | — | Ma L et al., Repurposing of HIV/HCV protease inhibit…, Antiviral research (2022) | [10.1016/j.antiviral.2022.105419](https://doi.org/10.1016/j.antiviral.2022.105419) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Muturi_2022_SARS_CoV_2_replication_viral_RNA_yield_in_supernatant](drugs/drug_simeprevir/pd_Muturi_2022_SARS_CoV_2_replication_viral_RNA_yield_in_supern.md) | SARS-CoV-2 replication (viral RNA yield in supernatant) ← simeprevir · direct sigmoid Emax (Hill) effect | — | Muturi E et al., Effects of simeprevir on the replicatio…, International journal of an… (2022) | [10.1016/j.ijantimicag.2021.106499](https://doi.org/10.1016/j.ijantimicag.2021.106499) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Pathak_2020_CC50](drugs/drug_simeprevir/pd_Pathak_2020_CC50.md) | Cell viability (MTT assay) ← Simeprevir · direct sigmoid Emax (Hill) effect | — | Pathak N et al., Zika Virus NS3 Protease Pharmacophore A…, Scientific reports (2020) | [10.1038/s41598-020-65489-w](https://doi.org/10.1038/s41598-020-65489-w) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Pathak_2020_EC50](drugs/drug_simeprevir/pd_Pathak_2020_EC50.md) | ZIKV virus titer (virus production) ← Simeprevir · direct sigmoid Emax (Hill) effect | — | Pathak N et al., Zika Virus NS3 Protease Pharmacophore A…, Scientific reports (2020) | [10.1038/s41598-020-65489-w](https://doi.org/10.1038/s41598-020-65489-w) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Pathak_2020_IC50](drugs/drug_simeprevir/pd_Pathak_2020_IC50.md) | ZIKV NS2B/NS3 protease activity (% protease activity) ← Simeprevir · direct sigmoid Emax (Hill) effect | — | Pathak N et al., Zika Virus NS3 Protease Pharmacophore A…, Scientific reports (2020) | [10.1038/s41598-020-65489-w](https://doi.org/10.1038/s41598-020-65489-w) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Ma_2022_Kd](drugs/drug_simeprevir/pd_Ma_2022_Kd.md) | Binding of simeprevir to SARS-CoV-2 3CLpro (MST) ← simeprevir · model not identified | — | Ma L et al., Repurposing of HIV/HCV protease inhibit…, Antiviral research (2022) | [10.1016/j.antiviral.2022.105419](https://doi.org/10.1016/j.antiviral.2022.105419) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=simeprevir) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate, `SLCO2B1` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate, `SLCO2B1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP3A4` inhibitor/substrate, `SLC10A1` inhibitor, `SLCO1B1` inhibitor/substrate, `SLCO1B3` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `ABCC2` inhibitor/substrate | DrugBank actor |
| excretion | liver | `ABCB11` inhibitor, `ABCC2` inhibitor/substrate | DrugBank actor |
| excretion | small intestine | `ABCC2` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: Genome polyprotein (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 15 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Valade_2018.pdf` | Valade E et al., Characterizing the Pharmacokinetic Inte…, The AAPS journal (2018) | popPK | 9 | [10.1208/s12248-018-0271-0](https://doi.org/10.1208/s12248-018-0271-0) | [30350297](https://pubmed.ncbi.nlm.nih.gov/30350297) | Population PK model of simeprevir in humans with quantitative DDI parameters (Ki 1610 ng/mL, +26% bioavailability), but full structural parameter values (CL, V) not shown in the abstract. |

<sub>queue written 2026-10-07T17:23:39.901877+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Balaraju_2015 | irrelevant | 0 | 0 | This is a medicinal chemistry/SAR synthesis study of new analogs; simeprevir is only mentioned as standard of care, with no PK parameters. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | In vitro antiviral drug screening with EC50/cytotoxicity data only; no PK disposition parameters for simeprevir. |
| popPK | Gammeltoft_2021 | irrelevant | 0 | 0 | In-vitro antiviral efficacy study (EC50/CC50) of HCV protease inhibitors against SARS-CoV-2; no PK disposition parameters for simeprevir. |
| popPK | Lenz_2015 | irrelevant | 0 | 0 | This is a virology/resistance study with no pharmacokinetic parameters for simeprevir; only in vitro EC50 fold changes are reported. |
| popPK | Ma_2022 | irrelevant | 0 | 0 | In-vitro antiviral screening study of simeprevir against SARS-CoV-2 3CLpro; no PK disposition parameters reported. |
| popPK | Muturi_2022 | irrelevant | 0 | 0 | This is an antiviral efficacy study (EC50/CC50, viral load) with no PK disposition parameters for simeprevir; PK is only mentioned qualitatively as a limitation. |
| popPK | Pathak_2020 | irrelevant | 0 | 0 | This is a Zika virus protease drug-discovery study; simeprevir appears only as an antiviral hit with EC50/IC50 values, with no PK disposition parameters. |
| popPK | Pham_2019 | irrelevant | 0 | 0 | In-vitro virology study of HCV resistance (EC50) with no pharmacokinetic disposition parameters for simeprevir. |
| popPK | Valade_2018_2 | irrelevant | 2 | 2 | Simeprevir is only a co-administered perpetrator drug; the population-PK model and numeric parameters (CL, Vmax, Km) are for AL-335 and its metabolites, not simeprevir itself. |
| popPK | Wang_2015 | irrelevant | 0 | 0 | This is a medicinal chemistry/synergy study of HCV NS4B inhibitors; simeprevir is only a co-administered comparator with no PK parameters reported. |
| popPK | Zhai_2018 | irrelevant | 1 | 2 | This is a preclinical PK study of GP205, a different HCV protease inhibitor; simeprevir is only a comparator (some rat AUC/half-life values for simeprevir appear in text, but simeprevir is not the subject drug). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 17:23 UTC</sub>
