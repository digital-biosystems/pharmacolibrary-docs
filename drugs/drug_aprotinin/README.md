# aprotinin

- **generic name:** aprotinin
- **ATC codes:** `B02AB01`
- **DrugBank:** [DB06692](https://go.drugbank.com/drugs/DB06692)
- **groups:** approved, investigational, withdrawn

## About

**Description.** Aprotinin is a protein-based drug that is also known as bovine pancreatic trypsin inhibitor (BPTI). Since it demonstrates the capacity to slow fibrinolysis, it has been employed to reduce bleeding during complex surgery such as heart and liver surgery. For this use, it is typically administered by injection. The goal of using of aprotinin was subsequently to minimize end-organ damage resulting from hypotension due to blood loss in surgery and to reduce the necessity for blood transfusions during surgery. Nevertheless, the drug was formally withdrawn worldwide in May of 2008 after studies confirmed that its use enhanced the risk of complications or death. The substance is consequently made available only for very restricted research use.

**Indication.** For prophylactic use to reduce perioperative blood loss and the need for blood transfusion in patients undergoing cardiopulmonary bypass in the course of coronary artery bypass graft surgery who are at an increased risk for blood loss and blood transfusion.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 14:28 | 0:44 | 0/1/0 | 0/0/0 | 0/0/1 | 6,143/49 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 1/1 | 2/6 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Tae_2011](drugs/drug_aprotinin/Aprotinin_Tae2011_reference.md) | Tae YM et al., Population pharmacokinetic analysis and…, Journal of clinical pharmac… (2011) | [10.1177/0091270010379411](https://doi.org/10.1177/0091270010379411) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **PAI-1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Sirgo_2009](drugs/drug_aprotinin/pgx_Sirgo_2009_PAI_1_Q100.md) | Sirgo G et al., PAI-1 gene: pharmacogenetic association…, European journal of anaesth… (2009) | [10.1097/EJA.0b013e3283240412](https://doi.org/10.1097/EJA.0b013e3283240412) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 19 matched, 19 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Levy_1994.pdf` | Levy JH et al., Pharmacokinetics of aprotinin in preope…, Anesthesiology (1994) | popPK | 10 | [10.1097/00000542-199405000-00010](https://doi.org/10.1097/00000542-199405000-00010) | [7517106](https://pubmed.ncbi.nlm.nih.gov/7517106) | The paper reports specific quantitative pharmacokinetic parameters (clearance 35.5 ml/min, Vss 26.5 l) for aprotinin in the text. |
| `Tae_2011.pdf` | Tae YM et al., Population pharmacokinetic analysis and…, Journal of clinical pharmac… (2011) | popPK | 10 | [10.1177/0091270010379411](https://doi.org/10.1177/0091270010379411) | [20926755](https://pubmed.ncbi.nlm.nih.gov/20926755) | The study is a population PK analysis of aprotinin in neonates and explicitly reports numeric values for clearance and volume of distribution in the text. |
| `Mary_1984.pdf` | Mary A et al., [In vitro aggregation of rat platelets…, Comptes rendus des seances… (1984) | pd | 4 | not captured | [6085483](https://www.ncbi.nlm.nih.gov/pubmed/6085483) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-09-06T14:27:21.151707+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Amara_2010 | not_relevant | 0 | 0 | The paper studies the effect of lisinopril on aprotinin catabolism as a renal function marker, not the effect of a gene variant on aprotinin's PK/PD. |
| popPK | Bianchi_1984 | irrelevant | 2 | 2 | The study focuses on aprotinin as a diagnostic imaging tracer (99mTc-aprotinin) rather than a therapeutic drug, and the reported clearance values are for the radiolabeled complex, not the native drug's population PK parameters. |
| popPK | Glusa_1997 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation of vascular relaxation and receptor activation, not a pharmacokinetic study, and aprotinin is used only as a qualitative inhibitor. |
| PD | Glusa_1997 | not_relevant | 3 | 2 | The paper reports IC50 values for benzamidine derivatives inhibiting trypsin-induced relaxation, but does not provide a concentration-effect curve or numeric PD parameters specifically for aprotinin. |
| popPK | Grassin-Delyle_2013 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for tranexamic acid, not aprotinin, which is only mentioned as a removed comparator. |
| PGx | Ihtasham_2025 | not_relevant | 0 | 0 | The paper is a narrative review of coagulation management strategies and does not report specific pharmacogenomic effects on the PK or PD of aprotinin. |
| popPK | Janecki_1991 | irrelevant | 0 | 0 | The study is an in-vitro investigation of Sertoli cell tight junctions where aprotinin is used only as a non-specific antiprotease control, not as the subject of pharmacokinetic analysis. |
| popPK | Kobayashi_1985 | irrelevant | 0 | 0 | The provided evidence contains only metadata and software version information, with no pharmacokinetic data or text regarding aprotinin. |
| PD | Kobayashi_1985 | not_relevant | 0 | 0 | The provided text is metadata for the GROBID software and does not contain any scientific content regarding aprotinin or pharmacodynamics. |
| PGx | Krogh_2008 | not_relevant | 0 | 0 | The paper describes the production of aprotinin in yeast and the effect of host genotype on growth rates and protein yield, not the pharmacokinetics or pharmacodynamics of aprotinin in humans. |
| popPK | Marchetti_2003 | irrelevant | 0 | 0 | The study is a mechanistic investigation of angiotensin I effects on intracellular calcium in rat arterioles, using aprotinin only as a non-specific serine protease inhibitor control, with no pharmacokinetic parameters reported. |
| PD | Marchetti_2003 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50, Emax) for Angiotensin I and II, but explicitly states that aprotinin had no effect on the response, providing no exposure-response or dose-response relationship for aprotinin. |
| popPK | Mary_1984 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of platelet aggregation and does not report pharmacokinetic parameters for aprotinin. |
| PD | Mary_1984 | not_relevant | 4 | 2 | The text describes a qualitative in vitro dose-response analysis (non-competitive antagonism) but does not provide specific numeric PD parameters (Emax, EC50 values) or data points to derive them. |
| popPK | McEvoy_2009 | irrelevant | 0 | 0 | The study is a mechanistic investigation of aprotinin's effects on cardiac contractility and cytokine release, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Sacchi_2014 | not_relevant | 0 | 0 | The paper describes a biomaterial delivery system using aprotinin as a structural component to control VEGF release, not a pharmacogenomic study of aprotinin's PK/PD. |
| popPK | Seifried_1988 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of rt-PA, and aprotinin is only mentioned as a limited utility inhibitor in in-vitro assays, not as the subject drug for PK parameter estimation. |
| popPK | Verstraete_1986 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of recombinant tissue-type plasminogen activator (rt-PA), and aprotinin is mentioned only as an anticoagulant additive in the plasma samples, not as the subject drug. |
| PGx | Yeleswarapu_2025 | not_relevant | 0 | 0 | The paper evaluates hydrogel formulations for extracellular vesicle delivery and does not mention aprotinin or any pharmacogenomic effects. |
| PGx | Zhou_2021 | not_relevant | 0 | 0 | The paper investigates corneal wound healing using hydrogels and does not mention aprotinin or any pharmacogenomic effects. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_aprotinin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
