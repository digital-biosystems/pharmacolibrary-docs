# tapentadol

- **generic name:** tapentadol
- **ATC codes:** `N02AX06`
- **DrugBank:** [DB06204](https://go.drugbank.com/drugs/DB06204)
- **groups:** approved

## About

**Description.** Tapentadol is a centrally-acting synthetic analgesic with a dual mechanism of action. It is a mu-opioid receptor agonist that also inhibits norepinephrine reuptake.[A260721, A36596]

Tapentadol was first approved by the FDA on November 20, 2008. The extended-release formulation of tapentadol was also approved by the FDA on August 26, 2011.[L47291] Used in the management of pain, tapentadol is typically reserved for patients who have limited alternative treatment options.

**Indication.** Tapentadol is indicated for the management of acute pain severe enough to require an opioid analgesic and for which alternative treatments are inadequate. Due to the risks of addiction, drug abuse, and drug misuse, tapentadol is reserved for patients for whom alternative treatment options are unavailable.[L47286, L47516, L47521]

The immediate-release tapentadol oral tablets are approved for use in patients six years and older with a body weight of at least 40 kg.[L47286] Tapentadol oral solution is used in patients aged six years and older with a body weight of at least 16 kg.[L47521] These formulations are not intended for long-term use unless the pain remains severe enough to require an opioid analgesic, for which alternative treatment options remain inadequate.

The extended-release tablets of tapentadol are indicated for the management of pain severe enough to require daily, around-the-clock, long-term opioid treatment and for which alternative treatment options are inadequate. They are also indicated for the management of neuropathic pain associated with diabetic peripheral neuropathy (DPN) in adults severe enough to require daily, around-the-clock, long-term opioid treatment and for which alternative treatment options are inadequate. This formulation is not indicated as an as-needed (prn) analgesic.[L47516]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-28 09:31 | 18:11 | 1/2/1 | 1/0/0 | 0/0/2 | 172,534/19,221 | ollama / qwen3.8:27b-mtp-q8_0 | 15 | 4/11 | 13/2 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Khalil_2020](drugs/drug_tapentadol/Tapentadol_Khalil2020_final.md) | Khalil F et al., Population Pharmacokinetics of Tapentad…, Journal of pain research (2020) | [10.2147/JPR.S269549](https://doi.org/10.2147/JPR.S269549) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Khalil_2020](drugs/drug_tapentadol/Tapentadol_Khalil2020_final_pediatric_patients_with_acute_pa.md) | Khalil F et al., Population Pharmacokinetics of Tapentad…, Journal of pain research (2020) | [10.2147/JPR.S269549](https://doi.org/10.2147/JPR.S269549) |
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Watson_2019](drugs/drug_tapentadol/Tapentadol_Watson2019_reference.md) | Watson E et al., Population pharmacokinetic modeling to…, Journal of pain research (2019) | [10.2147/JPR.S208454](https://doi.org/10.2147/JPR.S208454) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Jończyk_2022](drugs/drug_tapentadol/Tapentadol_Joczyk2022_reference.md) | Jończyk R et al., Multiple Dose Pharmacokinetics of Tapen…, Journal of pain research (2022) | [10.2147/JPR.S364902](https://doi.org/10.2147/JPR.S364902) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Zhang_2017](drugs/drug_tapentadol/Tapentadol_Zhang2017_reference.md) | Zhang L et al., Quantifying the Exposure of Tapentadol…, Clinical drug investigation (2017) | [10.1007/s40261-016-0482-z](https://doi.org/10.1007/s40261-016-0482-z) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Steel_2026](drugs/drug_tapentadol/pd_Steel_2026_N1.md) | Steel KAJ et al., Preclinical assay of the effects of lac…, Pain (2026) | [10.1097/j.pain.0000000000003810](https://doi.org/10.1097/j.pain.0000000000003810) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **OPRM1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Takemura_2024](drugs/drug_tapentadol/pgx_Takemura_2024_OPRM1_Q100.md) | Takemura M et al., Comparison of the Effects of OPRM1 A118…, Journal of pain and symptom… (2024) | [10.1016/j.jpainsymman.2023.09.017](https://doi.org/10.1016/j.jpainsymman.2023.09.017) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2C19** | `Q3` · CLint | metabolism | [Xu_2022](drugs/drug_tapentadol/pgx_Xu_2022_CYP2C19_Q3.md) | Xu RA et al., Effects of CYP2C19 variants on the meta…, Iranian journal of basic me… (2022) | [10.22038/IJBMS.2022.56996.12710](https://doi.org/10.22038/IJBMS.2022.56996.12710) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 46 matched, 46 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 5  ·  extracted 0  ·  needs_review 2  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Karbownik_2020.pdf` | Karbownik A et al., In vivo assessment of potential for UGT…, Biomedicine & pharmacothera… (2020) | pgx | 7 | [10.1016/j.biopha.2020.110530](https://doi.org/10.1016/j.biopha.2020.110530) | [32712531](https://www.ncbi.nlm.nih.gov/pubmed/32712531) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |
| `Natoli_2021.pdf` | Natoli S et al., Should we be concerned when COVID-19-po…, European review for medical… (2021) | pgx | 7 | [10.26355/eurrev_202107_26399](https://doi.org/10.26355/eurrev_202107_26399) | [34337735](https://www.ncbi.nlm.nih.gov/pubmed/34337735) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Muriel_2024.pdf` | Muriel J et al., Use of CYP2D6 substrates and inhibitors…, Biomedicine & pharmacothera… (2024) | pgx | 5 | [10.1016/j.biopha.2024.116882](https://doi.org/10.1016/j.biopha.2024.116882) | [38876046](https://www.ncbi.nlm.nih.gov/pubmed/38876046) | metadata signals extractable PGX data (CYP2D6) |
| `Pesce_2025.pdf` | Pesce AJ et al., CYP450-based reclassification of urinar…, Journal of opioid management (2025) | pgx | 5 | [10.5055/jom.1001](https://doi.org/10.5055/jom.1001) | [42429026](https://www.ncbi.nlm.nih.gov/pubmed/42429026) | metadata signals extractable PGX data (CYP450) |

<sub>queue written 2026-08-28T09:20:11.608383+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Cottrill_2021 | not_relevant | 0 | 0 | The paper reports genotype/phenotype classifications and qualitative metabolism pathways for tapentadol but does not report quantitative changes in specific PK or PD parameters (e.g., AUC, Cmax, pain scores) linked to these variants. |
| PGx | Domínguez-Oliva_2021 | not_relevant | 0 | 0 | The paper is a veterinary review discussing species differences in drug metabolism (dogs vs. cats) and mentions CYP polymorphisms for tramadol, but it does not report pharmacogenomic effects on tapentadol PK/PD parameters. |
| popPK | Huntjens_2016 | relevant | 10 | 0 | The evidence contains the NONMEM code structure for a tapentadol population PK model, confirming relevance, but no numeric parameter values (estimates) are present in the provided text. |
| PGx | Manandhar_2022 | not_relevant | 0 | 0 | The study reports no difference in tapentadol's pharmacodynamic response (intrinsic efficacy) between wild-type and variant (N40D, A6V) mu receptors, indicating no pharmacogenomic effect. |
| PGx | Mercadante_2011 | not_relevant | 0 | 0 | The paper is a general review of pain management and pharmacogenetics that mentions tapentadol's mechanism of action but does not report any specific gene variant effects on its pharmacokinetic or pharmacodynamic parameters. |
| PGx | Roulet_2021 | not_relevant | 0 | 0 | The paper discusses the lack of CYP2D6 influence on tapentadol PK/PD but does not report a specific pharmacogenomic effect or quantitative data for tapentadol. |
| popPK | Steel_2026 | irrelevant | 0 | 0 | The study is a preclinical electrophysiological assay measuring spinal evoked potentials, not a pharmacokinetic study, and does not report quantitative disposition parameters (CL, V, ka) for tapentadol. |
| PGx | Wang_2026 | not_relevant | 0 | 0 | The paper is a review of structural modifications of tramadol and does not report specific pharmacogenomic effects on tapentadol PK/PD parameters. |
| PGx | Yoshioka_2017 | not_relevant | 0 | 0 | The paper is a case report on drug-drug interactions (warfarin/methadone/oxycodone) and does not report pharmacogenomic effects on tapentadol PK/PD. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_tapentadol`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
