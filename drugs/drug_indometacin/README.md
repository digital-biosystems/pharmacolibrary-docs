<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01E&quot;,&quot;href&quot;:&quot;atc/C01E.md&quot;},{&quot;label&quot;:&quot;indometacin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Indometacin_Smyth2004v2_reference&quot;,&quot;label&quot;:&quot;Smyth_2004_2_reference&quot;,&quot;href&quot;:&quot;drugs/drug_indometacin/Indometacin_Smyth2004v2_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# indometacin

- **generic name:** indometacin
- **ATC codes:** `C01EB03`, `M01AB01`, `M02AA23`, `S01BC01`, `S01CC02`
- **DrugBank:** [DB00328](https://go.drugbank.com/drugs/DB00328) · **PubChem:** not captured
- **groups:** approved, investigational

## About

**Description.** Indometacin, or indomethacin, is a non-steroidal anti-inflammatory drug (NSAID) with anti-inflammatory, analgesic, and antipyretic properties. NSAIDs consist of agents that are structurally unrelated; the NSAID chemical classification of indometacin is an indole-acetic acid derivative with the chemical name 1- (p-chlorobenzoyl)25-methoxy-2-methylindole-3-acetic acid.[A177871] The pharmacological effect of indometacin is not fully understood, however, it is thought to be mediated through potent and nonselective inhibition of the enzyme cyclooxygenase (COX), which is the main enzyme responsible for catalyzes the rate-limiting step in prostaglandin and thromboxane biosynthesis via the arachidonic acid (AA) pathway. Indometacin was first discovered in 1963 and it was first approved for use in the U.S. by the Food and Drug Administration in 1965, [A486] along with other acetic acid derivatives such as [diclofenac] and [sulindac] that were also developed during the 1960s.[A177871] Since then, indometacin has been extensively studied in clinical trials as one of the most potent NSAIDs in blocking prostaglandin synthesis and was among the first NSAIDs to be used in the symptomatic treatment of migraine and for headaches that eventually became known as “indomethacin-responsive” headache disorders.[A177871] 

Most commonly used in rheumatoid arthritis, ankylosing spondylitis, osteoarthritis, acute shoulder pains, and acute gouty arthritis, indometacin is currently available as oral capsules as well as other methods of administration, including rectal and intravenous formulations. Intravenous indometacin is administered to close a hemodynamically significant patent ductus arteriosus, as indicated by clinical evidence, in premature infants.[L10553] Ophthalmic indometacin has been studied and used in the symptomatic treatment of postoperative ocular inflammation and pain and/or complications after cataract surgery. Although deemed effective in reducing ocular inflammation in c

**Indication.** Oral indometacin is indicated for symptomatic management of moderate to severe rheumatoid arthritis including acute flares of chronic disease, moderate to severe ankylosing spondylitis, moderate to severe osteoarthritis, acute painful shoulder (bursitis and/or tendinitis) and acute gouty arthritis.[A177871,L6778]
 
Intravenous indometacin is indicated to induce closure of a hemodynamically significant patent ductus arteriosus in premature infants weighing between 500 and 1750 g when after 48 hours usual medical management (e.g., fluid restriction, diuretics, digitalis, respiratory support, etc.) is ineffective.[L10553]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-27 16:46 | 3:39 | 0/1/0 | 0/0/0 | 0/0/0 | 32,524/9,935 | ollama / qwen3.8:27b-mtp-q8_0 | 12 | 2/0 | 2/0 | 0 |

## popPK records

| status | detail | model structure | params | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.444). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Smyth_2004_2_reference](drugs/drug_indometacin/Indometacin_Smyth2004v2_reference.md) | 1-compartment, IV | 2 | Smyth JM et al., Intravenous indometacin in preterm infa…, British journal of clinical… (2004) | [10.1111/j.1365-2125.2004.02139.x](https://doi.org/10.1111/j.1365-2125.2004.02139.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=indometacin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `SLCO1A2` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `SLCO1A2` inhibitor/substrate | DrugBank actor |
| distribution | blood | `ALB` unknown | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` inhibitor | DrugBank actor |
| distribution | lung | `ABCC1` inhibitor | DrugBank actor |
| metabolism | kidney | `SLC22A7` substrate, `UGT1A9` substrate, `UGT2B7` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CES1` substrate, `CYP2C19` inhibitor/substrate, `CYP2C9` substrate, `SLC10A1` substrate, `SLC22A7` substrate, `SLCO1B1` inhibitor, `UGT1A1` inhibitor/substrate, `UGT1A9` substrate, `UGT2B7` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `UGT1A1` inhibitor/substrate, `UGT2B7` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>“…ometacin is eliminated via renal excretion, metabolism, and biliary excretion. It is also…”</sub> | prose |
| excretion | kidney | `ABCC2` inhibitor/substrate, `ABCC4` inhibitor, `SLC22A6` inhibitor/substrate, `SLC22A8` inhibitor | DrugBank actor |
| excretion | liver | `ABCB11` substrate, `ABCC2` inhibitor/substrate, `ABCC3` inhibitor, `ABCC4` inhibitor | DrugBank actor |
| excretion | small intestine | `ABCC2` inhibitor/substrate, `ABCC3` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ABCC11 (inhibitor), ABCC6 (inhibitor), AKR1C3 (inhibitor), EIF2AK2 (inducer), GLO1 (inhibitor), PLA2G2A (inhibitor), PPARA (target), PPARG (activator), PTGDR2 (other/unknown), PTGR2 (inhibitor), PTGS1 (inhibitor), PTGS2 (inhibitor), SLC22A11 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tanaka_2016.pdf` | Tanaka S et al., Prediction of fetal ductus arteriosus c…, International journal of cl… (2016) | popPK | 8 | [10.5414/CP202532](https://doi.org/10.5414/CP202532) | [27285464](https://pubmed.ncbi.nlm.nih.gov/27285464) | The study is a PK/PD modeling paper that includes indometacin as a subject drug, but the specific numeric PK parameter values are not present in the provided evidence (abstract only). |

<sub>queue written 2026-09-27T16:43:11.234855+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cui_2016_2 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of zaltoprofen, with indometacin used only as a comparator for analgesic efficacy, and no PK parameters for indometacin are reported. |
| PD | Cui_2016_2 | not_relevant | 0 | 0 | The paper focuses on the transdermal delivery of zaltoprofen; indometacin is only used as a commercial comparator for qualitative analgesic effect, with no exposure-response or dose-response modeling or numeric PD parameters reported for it. |
| popPK | Fu_2010 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of betulinic acid where indometacin is used only as a non-specific COX inhibitor control, with no PK parameters reported. |
| PD | Fu_2010 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of betulinic acid, not indometacin; indometacin is only mentioned as a negative control inhibitor. |
| popPK | Nielsen_2009_2 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of gentamicin, with indometacin mentioned only as a concomitant medication covariate. |
| popPK | Pesić_2002 | irrelevant | 0 | 0 | The study is a pharmacological investigation of vascular contractions where indometacin is used only as a cyclooxygenase inhibitor tool, not as the subject of a pharmacokinetic analysis. |
| PD | Pesić_2002 | not_relevant | 0 | 0 | The paper investigates the pharmacology of acetylcholine on human arteries; indometacin is used only as a control inhibitor and no exposure-response or dose-response relationship for indometacin itself is reported. |
| popPK | Racké_1995 | irrelevant | 0 | 0 | The study is a pharmacological investigation of noradrenaline release in rat stomach where indometacin is used only as a non-essential control agent, with no pharmacokinetic parameters reported. |
| PD | Racké_1995 | not_relevant | 0 | 0 | The paper states that indometacin did not affect noradrenaline overflow, providing no numeric PD parameters or dose-response relationship for the drug. |
| popPK | Reimer_1996 | irrelevant | 0 | 0 | The study focuses on bicarbonate secretion and receptor characterization in guinea pigs, using indometacin only as a pretreatment agent to inhibit prostaglandin synthesis, with no pharmacokinetic parameters reported. |
| PD | Reimer_1996 | not_relevant | 0 | 0 | The paper investigates peptide hormone (VIP/secretin) pharmacology; indometacin is used only as a background treatment to inhibit prostaglandin synthesis and is not the subject of any exposure-response or dose-response analysis. |
| popPK | Tanaka_2016 | relevant | 8 | 0 | The study is a PK/PD modeling paper that includes indometacin as a subject drug, but the specific numeric PK parameter values are not present in the provided evidence (abstract only). |
| popPK | Tirapelli_2008 | irrelevant | 0 | 0 | Indometacin is used only as a pharmacological tool (COX inhibitor) in a vascular reactivity study, with no PK parameters reported. |
| PD | Tirapelli_2008 | not_relevant | 3 | 0 | The paper mentions indometacin qualitatively as a tool to reduce the maximum effect (Emax) of phenylephrine, but it does not report a concentration-effect or dose-response relationship for indometacin itself, nor does it provide numeric PD parameters for indometacin. |
| popPK | Uchôa_2009 | irrelevant | 0 | 0 | Indometacin is only a comparator in the anti-inflammatory assay; the PK model and numeric parameters are for PG15, not indometacin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-07-15 12:34 UTC</sub>
