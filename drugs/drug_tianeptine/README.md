<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;tianeptine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg&quot;,&quot;label&quot;:&quot;Szafarz_2018_intraperitoneal_10_mg_kg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tianeptine/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tianeptine_Szafarz2018_intravenous_1_mg_kg&quot;,&quot;label&quot;:&quot;Szafarz_2018_intravenous_1_mg_kg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tianeptine/Tianeptine_Szafarz2018_intravenous_1_mg_kg.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# tianeptine

- **generic name:** tianeptine
- **ATC codes:** `N06AX14`
- **DrugBank:** [DB09289](https://go.drugbank.com/drugs/DB09289) · **PubChem:** [CID 68870](https://pubchem.ncbi.nlm.nih.gov/compound/68870)
- **molar mass:** 436.952 g/mol (C21H25ClN2O4S) — DrugBank
- **groups:** investigational

## About

Tianeptine is a tricyclic antidepressant used to treat depression. It is not approved in the United States, where it remains investigational, though it has been used as an antidepressant in some other countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q424260](https://www.wikidata.org/wiki/Q424260) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tianeptine | parent | 436.952 | C21H25ClN2O4S | DrugBank | [68870](https://pubchem.ncbi.nlm.nih.gov/compound/68870) | Szafarz_2018 |
| MC5 | metabolite | 408.897 | C19H21ClN2O4S | PubChem | [5487151](https://pubchem.ncbi.nlm.nih.gov/compound/5487151) | Szafarz_2018 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:50 | 2:45 | 2/2/0 | 2/0/0 | 0/0/0 | 183,052/11,888 | ollama / glm-5.3-flash | 6 | 1/5 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.769). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Szafarz_2018_intraperitoneal_10_mg_kg](drugs/drug_tianeptine/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg.md) | ▶ model + simulator | 1-compartment, oral | 7 | Szafarz M et al., Pharmacokinetic study of tianeptine and…, Naunyn-Schmiedeberg's archi… (2018) | [10.1007/s00210-017-1448-2](https://doi.org/10.1007/s00210-017-1448-2) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.786). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Szafarz_2018_intravenous_1_mg_kg](drugs/drug_tianeptine/Tianeptine_Szafarz2018_intravenous_1_mg_kg.md) | ▶ model + simulator | 1-compartment, oral | 8 | Szafarz M et al., Pharmacokinetic study of tianeptine and…, Naunyn-Schmiedeberg's archi… (2018) | [10.1007/s00210-017-1448-2](https://doi.org/10.1007/s00210-017-1448-2) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.444). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Grasela_1993_reference](drugs/drug_tianeptine/Tianeptine_Grasela1993_reference.md) | — | 1-compartment (no model) | 0 | Grasela TH et al., Development of a population pharmacokin…, European journal of clinica… (1993) | [10.1007/BF00315502](https://doi.org/10.1007/BF00315502) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.929). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C7 apparent-parameter coherence violated (double correction)</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Szafarz_2018_estimate](drugs/drug_tianeptine/Tianeptine_Szafarz2018_estimate.md) | — | parent + metabolite (no model) | 5 (+1 cov.) | Szafarz M et al., Pharmacokinetic study of tianeptine and…, Naunyn-Schmiedeberg's archi… (2018) | [10.1007/s00210-017-1448-2](https://doi.org/10.1007/s00210-017-1448-2) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gassaway_2014_hDOR_G_protein](drugs/drug_tianeptine/pd_Gassaway_2014_hDOR_G_protein.md) | G-protein activation at human DOR (BRET) ← tianeptine · direct Emax (saturable) effect | — | Gassaway MM et al., The atypical antidepressant and neurore…, Translational psychiatry (2014) | [10.1038/tp.2014.30](https://doi.org/10.1038/tp.2014.30) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gassaway_2014_hMOR_G_protein](drugs/drug_tianeptine/pd_Gassaway_2014_hMOR_G_protein.md) | G-protein activation at human MOR (BRET) ← tianeptine · direct Emax (saturable) effect | — | Gassaway MM et al., The atypical antidepressant and neurore…, Translational psychiatry (2014) | [10.1038/tp.2014.30](https://doi.org/10.1038/tp.2014.30) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gassaway_2014_hMOR_Ki](drugs/drug_tianeptine/pd_Gassaway_2014_hMOR_Ki.md) | Radioligand binding displacement at human MOR ← tianeptine · inhibition effect | — | Gassaway MM et al., The atypical antidepressant and neurore…, Translational psychiatry (2014) | [10.1038/tp.2014.30](https://doi.org/10.1038/tp.2014.30) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gassaway_2014_hMOR_cAMP_inhibition](drugs/drug_tianeptine/pd_Gassaway_2014_hMOR_cAMP_inhibition.md) | Inhibition of forskolin-stimulated cAMP accumulation at human MOR ← tianeptine · direct Emax (saturable) effect | — | Gassaway MM et al., The atypical antidepressant and neurore…, Translational psychiatry (2014) | [10.1038/tp.2014.30](https://doi.org/10.1038/tp.2014.30) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gassaway_2014_mDOR_G_protein](drugs/drug_tianeptine/pd_Gassaway_2014_mDOR_G_protein.md) | G-protein activation at mouse DOR (BRET) ← tianeptine · direct Emax (saturable) effect | — | Gassaway MM et al., The atypical antidepressant and neurore…, Translational psychiatry (2014) | [10.1038/tp.2014.30](https://doi.org/10.1038/tp.2014.30) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gassaway_2014_mDOR_cAMP_inhibition](drugs/drug_tianeptine/pd_Gassaway_2014_mDOR_cAMP_inhibition.md) | Inhibition of forskolin-stimulated cAMP accumulation at mouse DOR ← tianeptine · direct Emax (saturable) effect | — | Gassaway MM et al., The atypical antidepressant and neurore…, Translational psychiatry (2014) | [10.1038/tp.2014.30](https://doi.org/10.1038/tp.2014.30) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gassaway_2014_mMOR_G_protein](drugs/drug_tianeptine/pd_Gassaway_2014_mMOR_G_protein.md) | G-protein activation at mouse MOR (BRET) ← tianeptine · direct Emax (saturable) effect | — | Gassaway MM et al., The atypical antidepressant and neurore…, Translational psychiatry (2014) | [10.1038/tp.2014.30](https://doi.org/10.1038/tp.2014.30) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gassaway_2014_mMOR_cAMP_inhibition](drugs/drug_tianeptine/pd_Gassaway_2014_mMOR_cAMP_inhibition.md) | Inhibition of forskolin-stimulated cAMP accumulation at mouse MOR ← tianeptine · direct Emax (saturable) effect | — | Gassaway MM et al., The atypical antidepressant and neurore…, Translational psychiatry (2014) | [10.1038/tp.2014.30](https://doi.org/10.1038/tp.2014.30) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Vandeputte_2020_arr2](drugs/drug_tianeptine/pd_Vandeputte_2020_arr2.md) | MOR activation, β-arrestin 2 recruitment (normalized AUC to hydromorphone) ← tianeptine · direct sigmoid Emax (Hill) effect | — | Vandeputte MM et al., In vitro functional characterization of…, Archives of toxicology (2020) | [10.1007/s00204-020-02855-7](https://doi.org/10.1007/s00204-020-02855-7) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Vandeputte_2020_mini_Gi](drugs/drug_tianeptine/pd_Vandeputte_2020_mini_Gi.md) | MOR activation, mini-Gi recruitment (normalized AUC to hydromorphone) ← tianeptine · direct sigmoid Emax (Hill) effect | — | Vandeputte MM et al., In vitro functional characterization of…, Archives of toxicology (2020) | [10.1007/s00204-020-02855-7](https://doi.org/10.1007/s00204-020-02855-7) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tianeptine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| — | brain | `SLC6A4` inhibitor | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: DRD3 (target), GRIA1 (modulator), HTR1A (inhibitor), OPRM1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 4  ·  extracted 2  ·  needs_review 0  ·  rejected 2  ·  stale 4
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Grasela_1993.pdf` | Grasela TH et al., Development of a population pharmacokin…, European journal of clinica… (1993) | popPK | 10 | [10.1007/BF00315502](https://doi.org/10.1007/BF00315502) | [8223841](https://pubmed.ncbi.nlm.nih.gov/8223841) | Population PK (NONMEM two-compartment) of tianeptine with full numeric CL, Vc, Q, Vp, ka values reported directly in the abstract. |
| `Grasela_1993_2.pdf` | Grasela TH et al., Predictive performance of population ph…, European journal of clinica… (1993) | popPK | 8 | [10.1007/BF00315492](https://doi.org/10.1007/BF00315492) | [8223832](https://pubmed.ncbi.nlm.nih.gov/8223832) | A population-PK evaluation of tianeptine, but the actual parameter values (CL, V, etc.) are not shown in the abstract—only prediction error metrics. |
| `Royer_1989.pdf` | Royer RJ et al., Tianeptine and its main metabolite phar…, Clinical pharmacokinetics (1989) | popPK | 6 | [10.2165/00003088-198916030-00005](https://doi.org/10.2165/00003088-198916030-00005) | [2721088](https://pubmed.ncbi.nlm.nih.gov/2721088) | Human PK study of tianeptine and its MC5 metabolite, but only percentage AUC changes and qualitative half-life statements appear; no numeric CL/V/t½ values are present in the evidence. |

<sub>queue written 2026-10-06T23:47:57.250360+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdel-Razaq_2007 | irrelevant | 0 | 0 | In-vitro cell signaling study of antidepressants, no pharmacokinetic parameters for tianeptine. |
| popPK | García-Alberca_2022 | irrelevant | 0 | 0 | Clinical efficacy study of tianeptine in Alzheimer's depression; no PK parameters (CL, V, ka, half-life, or PK model) reported anywhere. |
| popPK | Gassaway_2014 | irrelevant | 0 | 0 | In-vitro receptor pharmacology study (Ki/EC50 at opioid receptors), no PK disposition parameters for tianeptine. |
| popPK | Grasela_1993_2 | relevant | 8 | 3 | A population-PK evaluation of tianeptine, but the actual parameter values (CL, V, etc.) are not shown in the abstract—only prediction error metrics. |
| popPK | Jeon_2014 | irrelevant | 0 | 0 | This is a clinical efficacy trial comparing neurocognitive outcomes of tianeptine vs escitalopram, with no pharmacokinetic parameters reported. |
| popPK | Jung_2022 | irrelevant | 0 | 0 | Medicinal chemistry/SAR paper on tianeptine derivatives; no PK disposition parameters for tianeptine are reported. |
| popPK | Nowakowska_2000 | irrelevant | 0 | 0 | Behavioural pharmacology study in rats with no PK parameters or disposition values reported. |
| popPK | Park_2025 | irrelevant | 0 | 0 | This is a tDCS clinical trial in depression; tianeptine appears only as a co-medication associated with adverse events, with no PK parameters reported. |
| popPK | Royer_1989 | relevant | 6 | 3 | Human PK study of tianeptine and its MC5 metabolite, but only percentage AUC changes and qualitative half-life statements appear; no numeric CL/V/t½ values are present in the evidence. |
| popPK | Vandeputte_2020 | irrelevant | 0 | 0 | In vitro MOR activity study (EC50/Emax) of opioid NPS including tianeptine; no PK disposition parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:48 UTC</sub>
