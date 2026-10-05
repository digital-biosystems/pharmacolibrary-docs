<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;ramipril&quot;}]"></div>

# ramipril

- **generic name:** ramipril
- **ATC codes:** `C09AA05`, `C09BA05`, `C09BB05`, `C09BB07`, `C09BX05`, `C10BX04`, `C10BX06`, `C10BX17`, `C10BX18`
- **DrugBank:** [DB00178](https://go.drugbank.com/drugs/DB00178) · **PubChem:** [CID 5362129](https://pubchem.ncbi.nlm.nih.gov/compound/5362129)
- **molar mass:** 416.5106 g/mol (C23H32N2O5) — DrugBank
- **groups:** approved, investigational

## About

Ramipril is an ACE inhibitor used to treat arterial hypertension and congestive heart failure. It is an approved prescription drug, widely used for cardiovascular conditions and available in combination products with diuretics, calcium channel blockers, and lipid-modifying agents.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412666](https://www.wikidata.org/wiki/Q412666) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ramipril | parent | 416.511 | C23H32N2O5 | DrugBank | [5362129](https://pubchem.ncbi.nlm.nih.gov/compound/5362129) | Trobec_2024 |
| ramiprilat | metabolite | 388.464 | C21H28N2O5 | PubChem | [5464096](https://pubchem.ncbi.nlm.nih.gov/compound/5464096) | Trobec_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 23:48 | 5:45 | 0/1/0 | 2/0/1 | 0/0/0 | 207,703/44,288 | ollama / glm-5.3-flash | 9 | 5/4 | 6/3 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Trobec_2024_reference](drugs/drug_ramipril/Ramipril_Trobec2024_reference.md) | — | general linear (no model) | 2 | Trobec KČ et al., Population pharmacokinetics of ramipril…, Acta pharmaceutica (Zagreb,… (2024) | [10.2478/acph-2024-0018](https://doi.org/10.2478/acph-2024-0018) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Komolafe_2018_ABTS](drugs/drug_ramipril/pd_Komolafe_2018_ABTS.md) | ABTS radical scavenging activity ← free and bound phenolic extracts of Parkia biglobosa (FPPB/BPPB) · inhibition effect | — | Komolafe K et al., Angiotensin-1-converting enzyme inhibit…, Health science reports (2018) | [10.1002/hsr2.17](https://doi.org/10.1002/hsr2.17) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Komolafe_2018_ACE](drugs/drug_ramipril/pd_Komolafe_2018_ACE.md) | angiotensin-1 converting enzyme activity ← free and bound phenolic extracts of Parkia biglobosa (FPPB/BPPB) · inhibition effect | — | Komolafe K et al., Angiotensin-1-converting enzyme inhibit…, Health science reports (2018) | [10.1002/hsr2.17](https://doi.org/10.1002/hsr2.17) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Komolafe_2018_AChE](drugs/drug_ramipril/pd_Komolafe_2018_AChE.md) | cerebral acetylcholinesterase activity ← free and bound phenolic extracts of Parkia biglobosa (FPPB/BPPB) · inhibition effect | — | Komolafe K et al., Angiotensin-1-converting enzyme inhibit…, Health science reports (2018) | [10.1002/hsr2.17](https://doi.org/10.1002/hsr2.17) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Komolafe_2018_BuChE](drugs/drug_ramipril/pd_Komolafe_2018_BuChE.md) | cerebral butyrylcholinesterase activity ← free and bound phenolic extracts of Parkia biglobosa (FPPB/BPPB) · inhibition effect | — | Komolafe K et al., Angiotensin-1-converting enzyme inhibit…, Health science reports (2018) | [10.1002/hsr2.17](https://doi.org/10.1002/hsr2.17) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Komolafe_2018_DPPH](drugs/drug_ramipril/pd_Komolafe_2018_DPPH.md) | DPPH radical scavenging activity ← free and bound phenolic extracts of Parkia biglobosa (FPPB/BPPB) · inhibition effect | — | Komolafe K et al., Angiotensin-1-converting enzyme inhibit…, Health science reports (2018) | [10.1002/hsr2.17](https://doi.org/10.1002/hsr2.17) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Komolafe_2018_Na_K_ATPase](drugs/drug_ramipril/pd_Komolafe_2018_Na_K_ATPase.md) | cerebral Na+/K+ ATPase activity ← free and bound phenolic extracts of Parkia biglobosa (FPPB/BPPB) · inhibition effect | — | Komolafe K et al., Angiotensin-1-converting enzyme inhibit…, Health science reports (2018) | [10.1002/hsr2.17](https://doi.org/10.1002/hsr2.17) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Komolafe_2018_hemolysis_inhibition](drugs/drug_ramipril/pd_Komolafe_2018_hemolysis_inhibition.md) | hemolysis inhibition ← free and bound phenolic extracts of Parkia biglobosa (FPPB/BPPB) · inhibition effect | — | Komolafe K et al., Angiotensin-1-converting enzyme inhibit…, Health science reports (2018) | [10.1002/hsr2.17](https://doi.org/10.1002/hsr2.17) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Raasch_2005_BP](drugs/drug_ramipril/pd_Raasch_2005_BP.md) | blood pressure ← angiotensin I · direct Emax (saturable) effect | — | Raasch W et al., Angiotensin I-converting enzyme-depende…, Journal of hypertension (2005) | [10.1097/01.hjh.0000173395.42794.cd](https://doi.org/10.1097/01.hjh.0000173395.42794.cd) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Raasch_2005_NA](drugs/drug_ramipril/pd_Raasch_2005_NA.md) | noradrenaline overflow ← angiotensin I · direct Emax (saturable) effect | — | Raasch W et al., Angiotensin I-converting enzyme-depende…, Journal of hypertension (2005) | [10.1097/01.hjh.0000173395.42794.cd](https://doi.org/10.1097/01.hjh.0000173395.42794.cd) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Wang_2016_ADMA](drugs/drug_ramipril/pd_Wang_2016_ADMA.md) | asymmetric dimethylarginine biomarker turnover ← angiotensin II | — | Wang H et al., Modeling Disease Progression: Angiotens…, Frontiers in physiology (2016) | [10.3389/fphys.2016.00555](https://doi.org/10.3389/fphys.2016.00555) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Wang_2016_Ang_II](drugs/drug_ramipril/pd_Wang_2016_Ang_II.md) | angiotensin II biomarker turnover ← angiotensin II | — | Wang H et al., Modeling Disease Progression: Angiotens…, Frontiers in physiology (2016) | [10.3389/fphys.2016.00555](https://doi.org/10.3389/fphys.2016.00555) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Wang_2016_NO](drugs/drug_ramipril/pd_Wang_2016_NO.md) | nitric oxide biomarker turnover ← angiotensin II | — | Wang H et al., Modeling Disease Progression: Angiotens…, Frontiers in physiology (2016) | [10.3389/fphys.2016.00555](https://doi.org/10.3389/fphys.2016.00555) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Wang_2016_SBP](drugs/drug_ramipril/pd_Wang_2016_SBP.md) | systolic blood pressure biomarker turnover ← angiotensin II | — | Wang H et al., Modeling Disease Progression: Angiotens…, Frontiers in physiology (2016) | [10.3389/fphys.2016.00555](https://doi.org/10.3389/fphys.2016.00555) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ramipril) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `SLC15A1` substrate | DrugBank actor |
| metabolism | blood | `BCHE` inhibitor | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `BCHE` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC15A2` substrate | DrugBank actor |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ACE (inhibitor), BDKRB1 (activator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 10  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Brockmeier_1995.pdf` | Brockmeier D, Tight binding of ramiprilat to ACE: con…, International journal of cl… (1995) | popPK | 7 | not captured | [8963479](https://pubmed.ncbi.nlm.nih.gov/8963479) | A human PK study of ramipril/ramiprilat reporting non-linear, concentration-dependent elimination, but the abstract contains no numeric parameter values, which likely reside in the full text or figures not provided. |

<sub>queue written 2026-09-30T23:44:22.356903+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brockmeier_1995 | relevant | 7 | 1 | A human PK study of ramipril/ramiprilat reporting non-linear, concentration-dependent elimination, but the abstract contains no numeric parameter values, which likely reside in the full text or figures not provided. |
| popPK | Chatsiricharoenkul_2011 | irrelevant | 4 | 2 | Bioequivalence study with only non-compartmental bioequivalence ratios (Cmax, AUC CIs); no clearance, volume, half-life, or population-PK parameter values are reported. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | This is a uromodulin biomarker/outcomes study from the AASK trial; ramipril appears only as a randomized treatment arm, with no pharmacokinetic parameters (CL, V, ka, half-life, or PK model) reported anywhere. |
| popPK | Komolafe_2018 | irrelevant | 0 | 0 | This is an in-vitro antioxidant/ACE-inhibition study of Parkia biglobosa phenolics; ramipril appears only as an in-vitro ACE IC50 reference compound (0.173 µg/mL), with no PK disposition parameters for ramipril. |
| popPK | Krieger_1987 | irrelevant | 1 | 0 | This is a pharmacodynamic study of ACE inhibition in the isolated perfused rat kidney; no pharmacokinetic disposition parameters (CL, V, ka, half-life, or PK model) for ramipril are reported, and no numeric PK values appear in the evidence. |
| popPK | Raasch_2005 | irrelevant | 1 | 0 | This is a pharmacodynamic study of ACE/NEP inhibition on noradrenaline release in pithed rats; ramipril is a tool ACE inhibitor and no PK disposition parameters (CL, V, ka, half-life, compartmental model) are reported — only IC50/EC50 values appear. |
| popPK | Ragot_2016 | irrelevant | 0 | 0 | This is an outcomes study of renal function decline and cardiovascular events in type 2 diabetes; ramipril is only the trial drug in the DIABHYCAR cohort and no PK parameters (CL, V, ka, half-life, or population-PK model) for ramipril are reported anywhere in the evidence. |
| popPK | Russell_2004 | irrelevant | 1 | 0 | This is a metabolic/vascular pharmacodynamics study in JCR:LA-cp rats treated with ramipril; no PK disposition parameters (CL, V, ka, half-life, or PK model) for ramipril are reported anywhere in the evidence. |
| PD | Russell_2004 | not_relevant | 2 | 1 | Animal study with fixed-dose ramipril; reported EC50s are for vasodilators (ACh, SNP, bradykinin) in vitro, not a ramipril exposure- or dose-response relationship, and no ramipril PK/PD parameters are derivable. |
| popPK | Russell_2005 | irrelevant | 1 | 0 | This is a vascular function/insulin sensitivity study in which ramipril is only a reference comparator; no PK disposition parameters (CL, V, ka, half-life, or PK model) for ramipril are reported anywhere in the evidence. |
| PD | Russell_2005 | not_relevant | 1 | 1 | Ramipril appears only as a qualitative reference comparator in animal groups (percent changes, group comparisons); no ramipril concentration- or dose-effect relationship or numeric PD parameters (Emax/EC50 vs ramipril exposure) are reported or derivable. |
| popPK | Sarfo_2024 | irrelevant | 0 | 0 | This is a cognitive-outcomes secondary analysis of a stroke polypill trial; ramipril is only a polypill component (5 mg) and no pharmacokinetic parameters (CL, V, ka, half-life, or PK model) are reported anywhere in the evidence. |
| popPK | Schmidt_1986 | irrelevant | 1 | 0 | This is an in vitro/ex vivo pharmacology study on the isolated perfused rat kidney examining ACE inhibition by ramiprilat, with no pharmacokinetic disposition parameters (CL, V, ka, half-life, or PK model) for ramipril reported. |
| PD | Schmidt_1986 | not_relevant | 2 | 1 | Numeric EC50/pA2 values describe angiotensin I/II vasoconstriction in isolated rat kidney, not a ramipril/ramiprilat exposure- or dose-response relationship, which is only tested at fixed single doses with a qualitative rightward shift. |
| popPK | Wang_2016 | irrelevant | 2 | 1 | This is a mechanism-based disease-progression/PD turnover model in SHR rats where ramipril is only the intervention; the reported numeric parameters (Kin/Kout, EIRAMI, transit rate constants) are biomarker/PD parameters, not ramipril disposition PK values (no CL, V, ka, or half-life). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-30 18:49 UTC</sub>
