<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;trovafloxacin&quot;}]"></div>

# trovafloxacin

- **generic name:** trovafloxacin
- **ATC codes:** `J01MA13`
- **DrugBank:** [DB00685](https://go.drugbank.com/drugs/DB00685) · **PubChem:** [CID 62959](https://pubchem.ncbi.nlm.nih.gov/compound/62959)
- **molar mass:** 416.36 g/mol (C20H15F3N4O3) — DrugBank
- **groups:** approved, withdrawn

## About

Trovafloxacin is a fluoroquinolone antibiotic that was used to treat bacterial infections, including respiratory, sexually transmitted, and other bacterial infections. It has been withdrawn and is no longer available, including withdrawal of its products in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q544393](https://www.wikidata.org/wiki/Q544393) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:27 | 2:10 | 0/0/0 | 0/3/0 | 1/0/3 | 32,540/2,053 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Peterson_2002_K](drugs/drug_trovafloxacin/pd_Peterson_2002_K.md) | rate of bacterial kill ← trovafloxacin · inhibition effect | — | Peterson ML et al., Pharmacodynamics of trovafloxacin and l…, Antimicrobial agents and ch… (2002) | [10.1128/AAC.46.1.203-210.2002](https://doi.org/10.1128/AAC.46.1.203-210.2002) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Stearne_2001_B_fragilis](drugs/drug_trovafloxacin/pd_Stearne_2001_B_fragilis.md) | Bacteroides fragilis ← trovafloxacin · direct Emax (saturable) effect | — | Stearne LE et al., In vitro activity of trovafloxacin agai…, Antimicrobial agents and ch… (2001) | [10.1128/AAC.45.1.243-251.2001](https://doi.org/10.1128/AAC.45.1.243-251.2001) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [van_1999_E_R_max](drugs/drug_trovafloxacin/pd_van_1999_E_R_max.md) | growth inhibition of Staphylococcus aureus ← trovafloxacin · inhibition effect | — | van den Broek PJ et al., Intracellular activity of trovafloxacin…, The Journal of antimicrobia… (1999) | [10.1093/jac/44.2.193](https://doi.org/10.1093/jac/44.2.193) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.">safety allele</span> | **UGT1A1** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Annisa_2022](drugs/drug_trovafloxacin/pgx_Annisa_2022_UGT1A1_safety.md) | Annisa N et al., Transporter and metabolizer gene polymo…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1063413](https://doi.org/10.3389/fphar.2022.1063413) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **ABCB1** | `Q88` · AUC | transport | [Annisa_2022](drugs/drug_trovafloxacin/pgx_Annisa_2022_ABCB1_Q88.md) | Annisa N et al., Transporter and metabolizer gene polymo…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1063413](https://doi.org/10.3389/fphar.2022.1063413) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **SLCO1B1** | `Q88` · AUC | transport | [Annisa_2022](drugs/drug_trovafloxacin/pgx_Annisa_2022_SLCO1B1_Q88.md) | Annisa N et al., Transporter and metabolizer gene polymo…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1063413](https://doi.org/10.3389/fphar.2022.1063413) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **UGT1A9** | `Q88` · AUC | metabolism | [Annisa_2022](drugs/drug_trovafloxacin/pgx_Annisa_2022_UGT1A9_Q88.md) | Annisa N et al., Transporter and metabolizer gene polymo…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1063413](https://doi.org/10.3389/fphar.2022.1063413) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=trovafloxacin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` transport | paper PGx gene |
| absorption | kidney | `ABCB1` transport | paper PGx gene |
| absorption | liver | `ABCB1` transport | paper PGx gene |
| absorption | placenta | `ABCB1` transport | paper PGx gene |
| absorption | small intestine | `ABCB1` transport | paper PGx gene |
| absorption | testis | `ABCB1` transport | paper PGx gene |
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | `UGT1A9` metabolism | paper PGx gene |
| metabolism | liver | `CYP1A2` inhibitor, `SLCO1B1` transport, `UGT1A1` safety_allele, `UGT1A9` metabolism | DrugBank actor |
| metabolism | small intestine | `UGT1A1` safety_allele | paper PGx gene |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: TOP2A (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 16 matched, 16 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Peterson_2002.pdf` | Peterson ML et al., Pharmacodynamics of trovafloxacin and l…, Antimicrobial agents and ch… (2002) | pd | 5 | [10.1128/AAC.46.1.203-210.2002](https://doi.org/10.1128/AAC.46.1.203-210.2002) | [11751135](https://www.ncbi.nlm.nih.gov/pubmed/11751135) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Ross_2001.pdf` | Ross GH et al., Fluoroquinolone resistance in anaerobic…, Antimicrobial agents and ch… (2001) | pd | 5 | [10.1128/AAC.45.7.2136-2140.2001](https://doi.org/10.1128/AAC.45.7.2136-2140.2001) | [11408238](https://www.ncbi.nlm.nih.gov/pubmed/11408238) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `van_1999.pdf` | van den Broek PJ et al., Intracellular activity of trovafloxacin…, The Journal of antimicrobia… (1999) | pd | 4 | [10.1093/jac/44.2.193](https://doi.org/10.1093/jac/44.2.193) | [10473225](https://www.ncbi.nlm.nih.gov/pubmed/10473225) | metadata signals extractable PD data (EC50) |
| `Fujiwara_2015.pdf` | Fujiwara R et al., UDP-glucuronosyltransferase (UGT) 1A1 m…, Drug metabolism and pharmac… (2015) | pgx | 8 | [10.1016/j.dmpk.2014.09.003](https://doi.org/10.1016/j.dmpk.2014.09.003) | [25760534](https://www.ncbi.nlm.nih.gov/pubmed/25760534) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |

<sub>queue written 2026-10-07T12:27:34.857747+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Chang_2013 | not_relevant | 0 | 0 | The paper investigates in vitro enzyme and transporter inhibition to predict bilirubin elevation, not the effect of a genetic variant on the pharmacokinetics or pharmacodynamics of trovafloxacin. |
| popPK | Hamzah_2000 | irrelevant | 0 | 0 | The study is an in-vitro investigation of antimalarial activity and does not report any pharmacokinetic disposition parameters for trovafloxacin. |
| PGx | Mitsugi_2016 | not_relevant | 2 | 0 | The paper investigates the toxicological mechanism (CXCL2 induction) of trovafloxacin acyl-glucuronide using induced cell models and knockout mice, but does not report pharmacogenomic effects on standard PK or PD parameters. |
| popPK | Peterson_2002 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic investigation of antimicrobial efficacy (kill curves) and does not report pharmacokinetic disposition parameters such as clearance or volume. |
| popPK | Ross_2001 | irrelevant | 1 | 0 | The study is an in vitro pharmacodynamic model assessing resistance in bacteria, not a pharmacokinetic study of the drug's disposition parameters in a biological system. |
| PGx | Rubiano_2021 | not_relevant | 0 | 0 | The paper evaluates liver microphysiological systems for drug toxicity and metabolism using trovafloxacin but does not investigate genetic variants or pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Stearne_2001 | irrelevant | 0 | 0 | The study is an in-vitro microbiology experiment assessing antimicrobial activity (time-kill), not a pharmacokinetic study, and no disposition parameters are reported. |
| popPK | Zinner_1998 | irrelevant | 1 | 0 | The study is an in vitro dynamic model assessing antimicrobial activity, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for trovafloxacin. |
| popPK | van_1999 | irrelevant | 1 | 0 | The paper describes in vitro/intracellular antibacterial activity (microbiology) rather than pharmacokinetic disposition parameters for trovafloxacin. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
